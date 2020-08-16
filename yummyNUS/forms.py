from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import Review


class UserRegisterForm(UserCreationForm):
  email = forms.EmailField(required = True)

  def clean_email(self):
      if User.objects.filter(email=self.cleaned_data['email']).exists():
          raise forms.ValidationError("The given email is already registered")
      return self.cleaned_data['email']

  class Meta:
    model = User
    fields = ['username','email','password1','password2']


class ReviewForm(forms.ModelForm):
  class Meta:
    model = Review
    fields = ['Name','Comment','Rating']
    widgets ={
      'Name': forms.TextInput(attrs ={'class':"collection-item list-group-item form-control validate"}),
      'Comment': forms.Textarea(attrs = {'class':"collection-item list-group-item md-textarea form-control"}),
      'Rating': forms.Select(attrs ={'class':"collection-item list-group-item"}),
    }