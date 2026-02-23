from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):
    name = models.CharField(blank=True, null=True)
    email = models.EmailField(unique=True)
    student_id = models.CharField(max_length=25, blank=True, null=True)

    def __str__(self):
        return self.name
    
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    is_active = models.BooleanField(default=True)
    bio = models.TextField(blank=True)
    avatar = models.ImageField(upload_to='avatars/', blank=True, null=True)
    active_rentals_available = models.IntegerField(default=2)

    def __str__(self):
        return f"Profile of {self.user.name}"