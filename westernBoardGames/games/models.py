from django.db import models

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name_plural = "Categories"


class BoardGame(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='game_images/', blank=True, null=True)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, related_name="games")
    difficulty = models.CharField(choices=[("easy","Easy"),("medium","Medium"),("hard","Hard")], blank=True)
    min_players = models.IntegerField(null=True, blank=True)
    max_players = models.IntegerField(null=True, blank=True)
    play_time = models.IntegerField(help_text="Play time in minutes")
    quantity_total = models.IntegerField(default=1)
    quantity_available = models.IntegerField(default=1)

    def is_available(self):
        return self.quantity_available > 0

    def __str__(self):
        return self.title    
    
class GameCopy(models.Model):
    board_game = models.ForeignKey(BoardGame, on_delete=models.CASCADE, related_name="copies")
    copy_number = models.CharField(unique=True)  # e.g., serial number or unique identifier
    status = models.CharField(choices=[("available","Available"), 
                                       ("reserved","Reserved"), 
                                       ("checked_out","Checked out"), 
                                       ("buffer","In buffer/inspection"), 
                                       ("lost","Lost / Removed")], 
                                       default="available", max_length=20)
    condition = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)


