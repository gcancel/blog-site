from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.throttling import UserRateThrottle, AnonRateThrottle

from .models import ContactInfo
from .serializers import ContactInfoSerializer

# Create your views here.
class ContactInfoForm(generics.CreateAPIView):
    queryset = ContactInfo.objects.all()
    serializer_class = ContactInfoSerializer
    throttle_classes = [UserRateThrottle, AnonRateThrottle]
    
class ContactMessageView(generics.ListAPIView):
    queryset = ContactInfo.objects.all()
    serializer_class = ContactInfoSerializer
    throttle_classes = [UserRateThrottle, AnonRateThrottle]
    authentication_classes = [IsAdminUser]