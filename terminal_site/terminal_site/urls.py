from django.contrib import admin
from django.urls import include, path

from main import views  # Import views from the main app

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),  # Assuming you want to include the home view
    path('contacts/', views.contacts, name='contacts'),
    path('blog/', views.blog, name='blog'),
    path('cv/', views.cv, name='cv'),
]
