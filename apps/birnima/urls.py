from django.urls import path
from django.views.generic import TemplateView


from .views import (
    about_view,
    blog_view,
    features_view,
    comment_view,
    feedback_view,
    portfolio_view,
    faq_view,
    faqcategory_view,
    pricing_view,
)


app_name = "birnima"
urlpatterns = [
    path("", TemplateView.as_view(template_name="noPage.html")),
    path('about/', about_view, name="about"),
    path('blog/', blog_view, name="blog"),
    path('features/', features_view, name="features"),
    path('comment/', comment_view, name="comment"),
    path('feedback/', feedback_view, name="feedback"),
    path('portfolio/', portfolio_view, name="portfolio"),
    path('faq/', faq_view, name="faq"),
    path('faqcategory/', faqcategory_view, name="faqcategory"),
    path('pricing/', pricing_view, name="pricing"),
]
