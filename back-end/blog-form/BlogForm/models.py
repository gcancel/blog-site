from django.db import models

# Create your models here.
class ContactInfo(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    comments = models.CharField(max_length=1000)