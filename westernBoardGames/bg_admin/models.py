from django.db import models
from django.forms import BooleanField
from westernBoardGames.user.models import User

# Create your models here.

class ClubSetting(models.Model):
    default_rental_days = models.IntegerField(default=7)
    max_active_rentals_per_user = models.IntegerField(default=2)
    buffer_hours = models.IntegerField(default=24)
    max_extension_days = models.IntegerField(default=7)

class PickupWindow(models.Model):
    start_time = models.TimeField()
    end_time = models.TimeField()
    is_recurring = models.BooleanField(default=False)  # for “every Saturday at 5–8pm”
    description = models.CharField(blank=True, max_length=255)  # e.g. “Weekly Board Game Night”
    created_by = models.ForeignKey(User, null=True, blank=True, on_delete=models.SET_NULL)