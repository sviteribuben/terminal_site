from django.shortcuts import render


def home(request):
    return render(request, "home.html")


def contacts(request):
    return render(request, "contacts.html")


def blog(request):
    return render(request, "blog.html")


def cv(request):
    return render(request, "cv.html")


def sviteribuben(request):
    return render(request, "sviteribuben.html")


def nextdoor(request):
    return render(request, "nextdoor.html")
