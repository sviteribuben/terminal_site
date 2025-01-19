# terminal_site/main/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("contacts/", views.contacts, name="contacts"),
    path("blog/", views.blog, name="blog"),
    path("cv/", views.cv, name="cv"),
    path("sviteribuben/", views.sviteribuben, name="sviteribuben"),
    path("nextdoor/", views.nextdoor, name="nextdoor"),  # Ensure this line is present
    path("nextdoor/porno_bunner/", views.porno_bunner, name="porno_bunner"),  # Ensure this line is present
    path("nextdoor/exit_without/", views.exit_without, name="exit_without"),  # Ensure this line is present
]
