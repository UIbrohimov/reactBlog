from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

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
from .serializers import (
    AboutModelSerializer,
    BlogModelSerializer,
    FeaturesModelSerializer,
    CommentModelSerializer,
    FeedbackModelSerializer,
    PortfolioModelSerializer,
    FAQCategoryModelSerializer,
    FAQModelSerializer,
    PricingModelSerializer,
)


class AboutList(APIView):
    """
    Get all records from about model
    """
    queryset = About.objects.all()

    def get(self, request, format=None):
        serializer = AboutModelSerializer(self.queryset.all(), many=True)
        return Response(serializer.data)

about_view = AboutList.as_view()


class BlogList(APIView):
    """
    Get all records from blog model
    """
    queryset = Blog.objects.all()

    def get(self, request, format=None):
        serializer = BlogModelSerializer(self.queryset.all(), many=True, context={'request': request})
        return Response(serializer.data)


blog_view = BlogList.as_view()


class FeaturesList(APIView):
    """
    Get all records from features model
    """
    queryset = Features.objects.all()

    def get(self, request, format=None):
        serializer = FeaturesModelSerializer(self.queryset.all(), many=True)
        return Response(serializer.data)


features_view = FeaturesList.as_view()


class CommentList(APIView):
    """
    Get all records from comment model
    """
    queryset = Comment.objects.all()

    def get(self, request, format=None):
        serializer = CommentModelSerializer(self.queryset.all(), many=True)
        return Response(serializer.data)


comment_view = CommentList.as_view()


class FeedbackList(APIView):
    """
    Get all records from feedback model
    """
    queryset = Feedback.objects.filter(published=True)

    def get(self, request, format=None):
        serializer = FeedbackModelSerializer(self.queryset.all(), many=True)
        return Response(serializer.data)


feedback_view = FeedbackList.as_view()


class PortfolioList(APIView):
    """
    Get all records from portfolio model
    """
    queryset = Portfolio.objects.all()

    def get(self, request, format=None):
        serializer = PortfolioModelSerializer(self.queryset.all(), many=True)
        return Response(serializer.data)


portfolio_view = PortfolioList.as_view()


class FAQCategoryList(APIView):
    """
    Get all records from faqcategory model
    """
    queryset = FAQCategory.objects.all()

    def get(self, request, format=None):
        serializer = FAQCategoryModelSerializer(self.queryset.all(), many=True)
        return Response(serializer.data)


faqcategory_view = FAQCategoryList.as_view()


class FAQList(APIView):
    """
    Get all records from faq model
    """
    queryset = FAQ.objects.all()

    def get(self, request, format=None):
        category = self.request.GET.get('category')
        if category:
            self.queryset = self.queryset.filter(category__id=category)
        serializer = FAQModelSerializer(self.queryset.all(), many=True)
        return Response(serializer.data)


faq_view = FAQList.as_view()


class PricingList(APIView):
    """
    Get all records from pricing model
    """
    queryset = Pricing.objects.all()

    def get(self, request, format=None):
        serializer = PricingModelSerializer(self.queryset.all(), many=True)
        return Response(serializer.data)


pricing_view = PricingList.as_view()
