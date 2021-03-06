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
    author = serializers.ReadOnlyField(source='author.username')

    class Meta:
        model = Feedback
        fields = ['id', 'author', 'title', 'description', 'published']


class PortfolioModelSerializer(serializers.HyperlinkedModelSerializer):

    # permission_classes = [AllowAny]

    class Meta:
        model = Portfolio
        fields = ['id', 'title', 'description', 'image']


class FAQCategoryModelSerializer(serializers.HyperlinkedModelSerializer):

    # permission_classes = [AllowAny]

    class Meta:
        model = FAQCategory
        fields = ['id', 'title']


class FAQModelSerializer(serializers.HyperlinkedModelSerializer):

    category_id = serializers.CharField(source='category.id')

    class Meta:
        model = FAQ
        fields = ['id', 'category_id', 'queston', 'answer']


class PricingModelSerializer(serializers.HyperlinkedModelSerializer):

    # permission_classes = [AllowAny]
    info  = serializers.JSONField()

    class Meta:
        model = Pricing
        fields = ['id', 'title', 'info', 'price']
