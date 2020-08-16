from django.contrib import admin
from .models import *

#Change the header and title of the admin website
admin.site.site_header = "YummyNUS Administration"
admin.site.site_title = "YummyNUS"

admin.site.register(Menu)
admin.site.register(Location)
admin.site.register(FoodStall)
admin.site.register(Cuisine)
admin.site.register(Review)