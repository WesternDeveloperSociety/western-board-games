from django.contrib import admin
from .models import RentalRecord, ExtensionRequest, DamageReport

#makes the rental stuff visible in the web database
admin.site.register(RentalRecord)
admin.site.register(ExtensionRequest)
admin.site.register(DamageReport)
