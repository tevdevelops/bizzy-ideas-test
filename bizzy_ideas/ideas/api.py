from ideas.models import Idea
from rest_framework import viewsets, permissions
from .serializers import IdeaSerializer

# Idea Viewset
class IdeaViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = IdeaSerializer

    def get_queryset(self):
        return self.request.user.ideas.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
