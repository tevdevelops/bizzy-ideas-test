from rest_framework import routers
from .api import IdeaViewSet

router = routers.DefaultRouter()
router.register('api/ideas', IdeaViewSet, 'ideas')

urlpatterns = router.urls