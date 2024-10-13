# terminal_site/urls.py
from django.contrib import admin
from django.urls import blog, contacts, cv, include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('main.urls')),
    path('contacts/', contacts, name='contacts'),
    path('blog/', blog, name='blog'),
    path('cv/', cv, name='cv'),
]


