# terminal_site/terminal_site/urls.py
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("main.urls")),  # Ensure this line is present to include main app URLs
]