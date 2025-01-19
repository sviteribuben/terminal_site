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

def porno_bunner(request):
    return render(request, "sib_banner.html")  # Ensure this line is present

def exit_without(request):
    return render(request, "exit_without.html")  # Ensure this line is present
