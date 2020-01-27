from django.shortcuts import render


from .serializers import PostSerializers
from .models import Posts

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status

# Create your views here.

class PostViewSet(viewsets.ViewSet):
    def list(self, request):
        queryset = Posts.objects.all()
        serializer = PostSerializers(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def create(self, request):
        serializer = PostSerializers(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)