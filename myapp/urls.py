from django.contrib import admin
from django.urls import path,include
from . import views
urlpatterns = [
    path('hello',views.hello_world),
    path('task',views.test),
    path('',views.home_page),
    path('all-analytics',views.all_analytics),
    path('<slug:short_url>',views.redirectURL)
]