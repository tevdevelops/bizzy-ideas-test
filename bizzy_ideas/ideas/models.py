from django.db import models
from django.contrib.auth.models import User

class Idea(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(User, related_name="leads", on_delete=models.CASCADE, null=True)
