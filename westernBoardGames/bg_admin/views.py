from django.shortcuts import render
import math
from django.utils import timezone
from rest_framework.views import APIView
from rest_framework.response import Response

from westernBoardGames.rentals.models import RentalRecord
from westernBoardGames.games.models import BoardGame


def _borrower_name(user) -> str:
    first = getattr(user, "first_name", "").strip()
    last = getattr(user, "last_name", "").strip()
    full = f"{first} {last}".strip()
    if full:
        return full

    username = getattr(user, "username", None)
    if username:
        return str(username)

    email = getattr(user, "email", None)
    if email:
        return str(email)

    return str(user)


def _days_ceil(delta_seconds: float) -> int:
    return max(0, int(math.ceil(delta_seconds / 86400.0)))


class AdminDashboardView(APIView):
    def get(self, request):
        now = timezone.now()

        active_rentals = (
            RentalRecord.objects
            .filter(status__in=["checked_out", "overdue"], returned_at__isnull=True)
            .select_related("user", "game_copy__board_game")
            .order_by("-checked_out_at", "-reserved_at")
        )

        games_rented_out = active_rentals.count()
        games_past_due = active_rentals.filter(due_at__isnull=False, due_at__lt=now).count()
        games_in_catalogue = BoardGame.objects.filter(is_active=True).count()

        res = []
        for rental in active_rentals[:50]:
            bg = rental.game_copy.board_game
            due = rental.due_at

            image_url = None
            if getattr(bg, "image", None):
                try:
                    image_url = bg.image.url
                    image_url = request.build_absolute_uri(image_url)
                except Exception:
                    image_url = None

            borrower = _borrower_name(rental.user)

            status = "remaining"
            days_remaining = None
            days_overdue = None

            if due:
                if due < now:
                    status = "overdue"
                    days_overdue = _days_ceil((now - due).total_seconds())
                else:
                    status = "remaining"
                    days_remaining = _days_ceil((due - now).total_seconds())

            res.append({
                "id": rental.id,
                "game": bg.title,
                "borrower": borrower,
                "borrowerEmail": rental.user.email if getattr(rental.user, "email", None) else None,
                "dueDate": due.isoformat() if due else None,
                "daysRemaining": days_remaining,
                "daysOverdue": days_overdue,
                "image": image_url,
                "status": status,
            })

        return Response({
            "stats": {
                "gamesRentedOut": games_rented_out,
                "gamesPastDue": games_past_due,
                "gamesInCatalogue": games_in_catalogue,
            },
            "rentals": res,
        })