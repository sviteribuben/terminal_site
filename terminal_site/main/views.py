from django.shortcuts import render


def home(request):
    return render(request, 'main/home.html')

def contacts(request):
    return render(request, 'main/contacts.html')

def blog(request):
    return render(request, 'main/blog.html')

def cv(request):
    return render(request, 'main/cv.html')
