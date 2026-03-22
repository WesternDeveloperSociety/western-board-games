from rest_framework import serializers
from .models import RentalRecord, ExtensionRequest, DamageReport

#main Rental record (Who has what game?)
class RentalRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = RentalRecord
        fields = '__all__' #user, game_copy, status, dates, and notes

#extension requests
class ExtensionRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExtensionRequest
        fields = '__all__'

#damage reports (Is the box ripped?)
class DamageReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = DamageReport
        fields = '__all__'