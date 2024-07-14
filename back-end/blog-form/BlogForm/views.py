# from django.shortcuts import render
# from rest_framework.response import Response
from django.http import HttpResponseRedirect
from rest_framework.response import Response

# decorators for function based views...
from rest_framework.decorators import api_view, throttle_classes

from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.throttling import UserRateThrottle, AnonRateThrottle

# import of models, serializers, forms
from .models import ContactInfo
from .serializers import ContactInfoSerializer

# @method_decorator(csrf_protect, name='dispatch')
@throttle_classes([UserRateThrottle, AnonRateThrottle])
@api_view(['POST'])
def contact_form(request):
    if request.method == 'POST':
        form = ContactInfoSerializer(data=request.POST)
        if form.is_valid():
                form.save()
        # Redirect back to page after successful POST
        return HttpResponseRedirect({'message':'201 created.'}, redirect_to='http://localhost:3000/contact-me')


class ContactMessageView(generics.ListAPIView):
    queryset = ContactInfo.objects.all()
    serializer_class = ContactInfoSerializer
    throttle_classes = [UserRateThrottle, AnonRateThrottle]
    authentication_classes = [IsAdminUser]