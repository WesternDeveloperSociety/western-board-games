from rest_framework import serializers
from .models import BoardGame, Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'description']

class BoardGameSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True) 
    category_id = serializers.PrimaryKeyRelatedField(
        queryset=Category.objects.all(), 
        source='category', 
        write_only=True,
        required=False
    ) 
    is_available = serializers.SerializerMethodField()

    class Meta:
        model = BoardGame
        fields = [
            'id', 
            'title', 
            'description', 
            'image', 
            'category',
            'category_id',
            'difficulty',
            'min_players', 
            'max_players', 
            'play_time', 
            'quantity_total',
            'quantity_available',
            'is_available'
        ]
        read_only_fields = ['id', 'is_available']

    def get_is_available(self, obj):
        return obj.is_available()