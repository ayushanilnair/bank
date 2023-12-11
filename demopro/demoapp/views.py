from django.http import HttpResponse
from django.shortcuts import render,redirect


# Create your views here.

def demo(request):
    return render(request, 'home.html')


def login(request):
     if request.method =='POST':
         username=request.POST['username']
         password=request.POST['password']
         return render(request,'home2.html')
     return render(request, 'login.html')


def register(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        password1 = request.POST['password1']
        return redirect('login')
    return render(request, 'register.html')


def form(request):
    return render(request,'form.html')

def detail(request):
    if request.method == 'POST':
        return render(request,'application.html')
    return redirect('form/')
