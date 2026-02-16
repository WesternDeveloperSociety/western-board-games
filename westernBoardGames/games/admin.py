from django.contrib import admin
from .models import BoardGame, Category


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'description']
    search_fields = ['name']


@admin.register(BoardGame)
class BoardGameAdmin(admin.ModelAdmin):
    list_display = [
        'title',
        'category',
        'difficulty',
        'quantity_available',
        'quantity_total',
    ]
    list_filter = ['category', 'difficulty']
    search_fields = ['title', 'description']
    list_editable = ['quantity_available']