from django.http import HttpResponse,Http404
from django.shortcuts import render,redirect
from .models import FoodStall,Review
from .forms import UserRegisterForm,ReviewForm
from django.contrib import messages
from datetime import date

# Home page
def index(request):
    stall =FoodStall.objects.get(id = abs(int(date.today().strftime("%d"))%8)+3)

    return render(request,"yummyNUS/index.html",{'stall':stall, 'menu':stall.menus.all()}) 

#Stalls Page
def stalls(request):
    context = { 'stalls' : FoodStall.objects.all()}
    return render(request,"yummyNUS/stalls.html",context) 

#Navigation Page
def navigate(request):
    return render(request,"yummyNUS/navi.html") 

#Login Page
def login(request):
    return render(request,"yummyNUS/login.html") 

#SignUp Page
def signup(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(request,f'Account created for {username}!')
            return redirect('login')
    else:
        form = UserRegisterForm()
    return render(request,"yummyNUS/signup.html",{'form':form}) 

#individual stall
def stall(request,stall_id):
    try:
        stall =FoodStall.objects.get(id = stall_id)
    except FoodStall.DoesNotExist:
      raise Http404("Foodstall does not exist")
    if request.method == 'POST':
        
        form = ReviewForm(request.POST)
        form.foodstall_id = stall_id
        
        if form.is_valid():
            name = form.cleaned_data.get('Name')
            rating = form.cleaned_data.get('Rating')
            comment = form.cleaned_data.get('Comment')
            rev = Review(Name=name,Rating = rating,Comment = comment)
            rev.save()
            stall.review.add(rev)
            stall.save()
            context= {'stall':stall, 'menus': stall.menus.all(), 'form':form, 'reviews':stall.review.all()}
            return render(request,'yummyNUS/stall.html',context)
    else:
        
        form = ReviewForm()
    
        
    context= {'stall':stall, 'menus': stall.menus.all(), 'form':form, 'reviews':stall.review.all()}
    return render(request,'yummyNUS/stall.html',context)