from django.db import models
from westernBoardGames.user.models import User
from westernBoardGames.games.models import *;

from django.utils import timezone
from datetime import timedelta

# Create your models here.

class RentalRecord(models.Model):
    user = models.ForeignKey( User, on_delete=models.CASCADE, related_name="rental_records")
    game_copy = models.ForeignKey(GameCopy, on_delete=models.CASCADE, related_name="rental_records")
    status = models.CharField(choices= [("reserved", "Reserved"), 
                               ("checked_out", "Checked out"), 
                               ("returned", "Returned"), 
                               ("overdue", "Overdue"), 
                               ("lost", "Lost"), 
                               ("damaged", "Damaged")], 
                               default="reserved", max_length=20)
    reserved_at = models.DateTimeField(auto_now_add=True)
    checked_out_at = models.DateTimeField(blank=True, null=True)
    due_at = models.DateTimeField(blank=True, null=True)
    returned_at = models.DateTimeField(blank=True, null=True)
    notes = models.TextField(blank=True)

    def save(self, *args, **kwargs):
        # Set due_at when checked_out_at is set
        if self.checked_out_at and not self.due_at:
            self.due_at = self.checked_out_at + timedelta(days=7)
        super().save(*args, **kwargs)

class ExtensionRequest(models.Model):
    rental_record = models.ForeignKey(RentalRecord, on_delete=models.CASCADE, related_name="extension_requests")
    requested_at = models.DateTimeField(auto_now_add=True)
    new_due_date = models.DateTimeField()
    reason = models.TextField()
    status = models.CharField(choices=
                              [("pending","Pending"), 
                               ("approved","Approved"), 
                               ("rejected","Rejected")], 
                               default="pending", max_length=20)
    
class DamageReport(models.Model):
    rental_record = models.ForeignKey(RentalRecord, on_delete=models.CASCADE, related_name="damage_reports")
    reported_at = models.DateTimeField(auto_now_add=True)
    description = models.TextField()
    damage_photos = models.ImageField(upload_to='damage_photos/', blank=True, null=True)
    status = models.CharField(choices=
                              [("ok","No issue"), 
                               ("damaged","Damaged"), 
                               ("missing_pieces","Missing pieces"), 
                               ("lost","Lost")], default="ok", max_length=20)
    admin_notes = models.TextField(blank=True)
    replacement_cost = models.DecimalField(max_digits=8, decimal_places=2, blank=True, null=True)
    paid = models.BooleanField(default=False)