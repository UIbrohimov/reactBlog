from django.urls import path, include
from rest_framework import serializers
from rest_framework.permissions import IsAuthenticated, AllowAny

from .models import (
    About,
    Blog,
    Features,
    Comment,
    Feedback,
    Portfolio,
    FAQ,
    FAQCategory,
    Pricing,
)

# Serializers define the API representation.
class AboutModelSerializer(serializers.HyperlinkedModelSerializer):

    # permission_classes = [AllowAny]

    class Meta:
        model = About
        fields = ['id', 'title', 'description', 'image']

class BlogModelSerializer(serializers.HyperlinkedModelSerializer):

    # permission_classes = [AllowAny]
    created_at = serializers.DateTimeField(read_only=True, format="%Y-%m-%d")
    class Meta:
        model = Blog
        fields = ['id', 'title', 'description', 'image', 'created_at']


class FeaturesModelSerializer(serializers.HyperlinkedModelSerializer):

    # permission_classes = [AllowAny]

    class Meta:
        model = Features
        fields = ['id', 'title', 'description', 'bi_icon_class']


class CommentModelSerializer(serializers.HyperlinkedModelSerializer):

    # permission_classes = [AllowAny]

    class Meta:
        model = Comment
        fields = ['id', 'blog', 'author', 'content']


class FeedbackModelSerializer(serializers.HyperlinkedModelSerializer):

    # permission_classes = [AllowAny]

    class Meta:
        model = Feedback
        fields = ['id', 'author__name', 'title', 'description', 'published']


class PortfolioModelSerializer(serializers.HyperlinkedModelSerializer):

    # permission_classes = [AllowAny]

    class Meta:
        model = Portfolio
        fields = ['id', 'title', 'description']


class FAQCategoryModelSerializer(serializers.HyperlinkedModelSerializer):

    # permission_classes = [AllowAny]

    class Meta:
        model = FAQCategory
        fields = ['id', 'title']


class FAQModelSerializer(serializers.HyperlinkedModelSerializer):

    # permission_classes = [AllowAny]

    class Meta:
        model = FAQ
        fields = ['id', 'category', 'question', 'answer']


class PricingModelSerializer(serializers.HyperlinkedModelSerializer):

    # permission_classes = [AllowAny]

    class Meta:
        model = Pricing
        fields = ['id', 'title', 'info', 'price']
