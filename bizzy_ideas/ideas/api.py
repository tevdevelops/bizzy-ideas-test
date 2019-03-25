from ideas.models import Idea
from rest_framework import viewsets, permissions
from .serializers import IdeaSerializer

# Idea Viewset
class IdeaViewSet(viewsets.ModelViewSet):
    queryset = Idea.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = IdeaSerializer