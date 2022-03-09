from django.contrib import admin

from .models import (
    About,
    Blog,
    Features,
    Comment,
    Feedback,
    Portfolio,
    Pricing,
    FAQ,
    FAQCategory
)


admin.site.register(About)
admin.site.register(Blog)
admin.site.register(Features)
admin.site.register(Comment)
admin.site.register(Feedback)
admin.site.register(Portfolio)
admin.site.register(Pricing)
admin.site.register(FAQ)
admin.site.register(FAQCategory)
