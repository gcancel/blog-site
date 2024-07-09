from django.db import models

# Create your models here.
class ContactInfo(models.Model):
    name = models.CharField(max_length=255, blank=False)
    email = models.EmailField(blank=False)
    comments = models.CharField(max_length=1000, blank=False)
    
    def __str__(self):
        return f'{self.name}: {self.comments}'