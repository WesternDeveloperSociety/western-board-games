from rest_framework import viewsets
from .models import RentalRecord, ExtensionRequest
from .serializers import RentalRecordSerializer, ExtensionRequestSerializer

class RentalRecordViewSet(viewsets.ModelViewSet):
    """ handles:
    - GET /api/rentals/records/ (List all rentals)
    - POST /api/rentals/records/ (Create a new checkout)
    """
    queryset = RentalRecord.objects.all()
    serializer_class = RentalRecordSerializer