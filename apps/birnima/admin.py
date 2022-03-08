from django.contrib import admin

from .models import About, Blog, Features, Comment, Feedback, Portfolio
# Register your models here.

admin.site.register(About)
admin.site.register(Blog)
admin.site.register(Features)
admin.site.register(Comment)
admin.site.register(Feedback)
admin.site.register(Portfolio)
