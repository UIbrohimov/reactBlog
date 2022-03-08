from unicodedata import name
from django.urls import path

from .views import (
    about_view,
    blog_view,
    features_view,
    comment_view,
    feedback_view,
    portfolio_view
)


app_name = "birnima"
urlpatterns = [
    path('about/', about_view, name="about"),
]
