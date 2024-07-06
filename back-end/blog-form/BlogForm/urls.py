from django.urls import path
from .views import ContactInfoForm, ContactMessageView

urlpatterns = [
    path('contact-form', ContactInfoForm.as_view(), name='contact-info'),
    path('messages', ContactMessageView.as_view(), name='messages'),
]