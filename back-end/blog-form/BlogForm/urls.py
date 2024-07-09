from django.urls import path
from .views import ContactMessageView
from . import views

urlpatterns = [
    path('contact-form', views.contact_form, name='contact-form'),
    path('messages', ContactMessageView.as_view(), name='messages'),
]