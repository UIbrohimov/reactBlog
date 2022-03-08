from unicodedata import name
from django.urls import path

from .views import (
    about_view,
    blog_view,
    features_view,
    comment_view,
    feedback_view,
    portfolio_view,
    faq_view,
    faqcategory_view,
)


app_name = "birnima"
urlpatterns = [
    path('about/', about_view, name="about"),
    path('blog/', blog_view, name="blog"),
    path('features/', features_view, name="features"),
    path('comment/', comment_view, name="comment"),
    path('feedback/', feedback_view, name="feedback"),
    path('portfolio/', portfolio_view, name="portfolio"),
    path('faq/', faq_view, name="faq"),
    path('faqcategory/', faqcategory_view, name="faqcategory"),
]
