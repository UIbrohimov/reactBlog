from django.urls import path, include
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets
from rest_framework.permissions import IsAuthenticated, AllowAny

from .models import About, Blog, Features, Comment, Feedback, Portfolio, FAQ, FAQCategory

# Serializers define the API representation.
class AboutModelSerializer(serializers.HyperlinkedModelSerializer):

    # permission_classes = [AllowAny]

    class Meta:
        model = About
        fields = ['title', 'description', 'image']

class BlogModelSerializer(serializers.HyperlinkedModelSerializer):

    # permission_classes = [AllowAny]

    class Meta:
        model = Blog
        fields = ['author', 'title', 'description', 'image']


class FeaturesModelSerializer(serializers.HyperlinkedModelSerializer):

    # permission_classes = [AllowAny]

    class Meta:
        model = Features
        fields = ['title', 'description', 'bi_icon_class']


class CommentModelSerializer(serializers.HyperlinkedModelSerializer):

    # permission_classes = [AllowAny]

    class Meta:
        model = Comment
        fields = ['blog', 'author', 'content']


class FeedbackModelSerializer(serializers.HyperlinkedModelSerializer):

    # permission_classes = [AllowAny]

    class Meta:
        model = Feedback
        fields = ['author', 'title', 'description', 'published']


class PortfolioModelSerializer(serializers.HyperlinkedModelSerializer):

    # permission_classes = [AllowAny]

    class Meta:
        model = Portfolio
        fields = ['title', 'description']


class FAQCategoryModelSerializer(serializers.HyperlinkedModelSerializer):

    # permission_classes = [AllowAny]

    class Meta:
        model = FAQCategory
        fields = ['id', 'title']


class FAQModelSerializer(serializers.HyperlinkedModelSerializer):

    # permission_classes = [AllowAny]

    class Meta:
        model = FAQ
        fields = ['category', 'question', 'answer']
