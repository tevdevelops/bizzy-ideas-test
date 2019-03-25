from rest_framework import serializers
from ideas.models import Idea

# Idea Serializer
class IdeaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Idea
        fields = "__all__"