from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from .models import ContactInfo
from .serializers import ContactInfoSerializer

# Create your views here.
class ContactInfoForm(generics.GenericAPIView):
    queryset = ContactInfo.objects.all()
    serializer_class = ContactInfoSerializer
    