from django.shortcuts import render
from django.urls import path
from . import views
app_name='fl_app'
urlpatterns=[
    path('home/',views.home,name='home'),
    path('', views.home, name='home'),

    path('register/', views.register, name='register'),
    path('updateprofile/', views.updateprofile, name='updateprofile'),
    path('mainpage/', views.mainpage, name='mainpage'),
    path('availfarmers/', views.availfarmers, name='availfarmers'),
    path('availlabours/', views.availlabours, name='availlabours'),
    path('relation11/<int:value>',views.relation11,name='relation11'),

    path('relation22/<int:value>',views.relation22,name='relation22'),

    path('reqfarmers', views.reqfarmers, name='reqfarmers'),

    path('reqlabours', views.reqlabours, name='reqlabours'),

    path('history', views.history, name='history'),
    path('remove/<int:value>', views.remove, name='remove'),

    #path('relation22/<slug:value>',views.relation11,name='relation22'), we can use
    # if your passing variable contains @ $ # ? = _ - all thes stuff along numbers
    #and letters

]