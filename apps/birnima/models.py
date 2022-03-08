from django.db import models
from django.contrib.auth.models import User
from django.utils.translation import gettext_lazy as _
from jsonfield import JSONField


# Create your models here.
class About(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='about')
    
    def __str__(self):
        return self.title


class Blog(models.Model):
    author = models.ForeignKey(User, verbose_name=_("Author"), on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='blog')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Features(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    bi_icon_class = models.CharField(max_length=100)

    def __str__(self):
        return self.title


class Comment(models.Model):
    blog = models.ForeignKey(Blog, verbose_name=_("Blog"), on_delete=models.CASCADE)
    author = models.ForeignKey(User, verbose_name=_("Author"), on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.content


class Feedback(models.Model):
    author = models.ForeignKey(User, verbose_name=_("Author"), on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    published = models.BooleanField(default=False)

    def __str__(self):
        return self.title


class Portfolio(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='portfolio')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Pricing(models.Model):
    title = models.CharField(max_length=100)
    price = models.IntegerField()
    info = JSONField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class FAQ(models.Model):
    queston = models.CharField(max_length=100)
    answer = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Message(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=100)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
