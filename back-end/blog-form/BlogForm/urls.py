from django.urls import path
from .views import ContactInfoForm

urlpatterns = [
    path('contact-form', ContactInfoForm.as_view(), name='contact-info'),
]