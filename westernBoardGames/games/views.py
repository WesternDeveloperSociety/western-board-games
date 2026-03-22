from rest_framework import viewsets
from .models import RentalRecord, ExtensionRequest
from .serializers import RentalRecordSerializer, ExtensionRequestSerializer

class RentalRecordViewSet(viewsets.ModelViewSet):
    queryset = RentalRecord.objects.all()
    serializer_class = RentalRecordSerializer

    #automatically see who is renting
    def perform_create(self, serializer):
        #set the 'user' to the one currently logged in and defaults to checkout
        serializer.save(user=self.request.user, status='checked_out')