from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import RentalRecordViewSet

#builds the URL path
router = DefaultRouter()
router.register(r'records', RentalRecordViewSet)

urlpatterns = [
    #include the router's patterns.
    path('', include(router.urls)),
]