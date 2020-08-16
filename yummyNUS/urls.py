from django.urls import path,include
from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [
    path("", views.index,name='home'),
    path("stalls", views.stalls,name='stalls'),
    path("navi",views.navigate,name='navi'),
    path("signup",views.signup,name='signup'),
    path("<int:stall_id>",views.stall),
    path('login/',auth_views.LoginView.as_view(template_name='yummyNUS/login.html'),name = "login"),
    path('logout/',auth_views.LogoutView.as_view(template_name ='yummyNUS/logout.html'),name = "logout")
]