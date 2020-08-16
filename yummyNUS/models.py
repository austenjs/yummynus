from django.db import models
import uuid
from django.utils import timezone



#Locations (engineering, science, yih, etc)
class Location(models.Model):
  name = models.CharField(max_length = 255,unique = True)
  
  def __str__(self):
    return f'{self.name}'

#Type of Cuisine
class Cuisine(models.Model):
  name = models.CharField(max_length = 255, unique = True)

  def __str__(self):
    return f'{self.name}'


#Details of a menu
class Menu(models.Model):
  name = models.CharField(max_length = 255, unique = True)
  cuisine = models.ForeignKey(Cuisine,on_delete = models.CASCADE)
  description = models.CharField(max_length = 255)
  price = models.FloatField(max_length=15)
  def __str__(self):
    return f'{self.name} - {self.cuisine} - {self.price}'
  
#Details of a review
class Review(models.Model):
  Name = models.CharField(max_length = 255)
  date = models.DateTimeField(default=timezone.now)
  Comment = models.TextField()
  #Rating from 1-5
  class Rating(models.IntegerChoices):
    Poor = 1
    Okay = 2
    Good = 3
    Great = 4
    Excelent = 5


  Rating = models.IntegerField(choices=Rating.choices)

  def __str__(self):
    return f'{self.Comment} - {self.Rating}/5'

#Details of a foodstall
class FoodStall(models.Model):
  id = models.AutoField(primary_key=True)
  name = models.CharField(max_length = 255)
  address = models.CharField(max_length = 255)
  location = models.ForeignKey(Location,on_delete = models.CASCADE)
  cuisine = models.ForeignKey(Cuisine,on_delete = models.CASCADE)
  menus = models.ManyToManyField(Menu, blank=True , related_name="menu")
  review = models.ManyToManyField(Review,blank=True)
  def __str__(self):
    return f'{self.name}'
