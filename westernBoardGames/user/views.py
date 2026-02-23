from django.shortcuts import render
from rest_framework.response import Response
from .models import User, UserProfile
from .serializers import UserSerializer, UserProfileSerializer

# Create your views here.

def GetUser(request):
    user = User.objects.get(request.user)
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

def GetProfile(request):
    user = UserProfile.objects.get(request.user)
    serializer = UserProfileSerializer(user, many=False)
    return Response(serializer.data)
