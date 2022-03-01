from unicodedata import name
from django.urls import path

from .views import birnima


app_name = "birnima"
urlpatterns = [
    path('', birnima, name="birnima"),
]
