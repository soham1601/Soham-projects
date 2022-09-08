from datetime import date
from django.shortcuts import render,redirect
from django.http import HttpResponse
from .models import LongToShort

def hello_world(request):
    return HttpResponse("Hello World")

def home_page(request):
    context={
        "submitted":False,
        "error":False
    }
    if request.method=="POST":
       
        data=request.POST
        long_url=data['longurl']
        custom_name=data['custom_name']
        try:
            obj=LongToShort(
            long_url=long_url,
            short_url=custom_name
            )
            obj.save();
            date=obj.date;
            clicks=obj.clicks;
            context['long_url']=long_url
            context['short_url']=request.build_absolute_uri() +custom_name;
            context["date"]=date;
            context["click"]=clicks;
            print(long_url)
            print(custom_name)
            context["submitted"]=True
        except:
            context["error"]=True
        
    else:
        print("User doesn't send anything")
   
    return render(request,"index.html",context)

def test(request):
    data={
        "name":"Soham"
    }
    return render(request,"task.html",data);

def redirectURL(request,short_url):
    row=LongToShort.objects.filter(short_url=short_url)
    if len(row)==0:
        return HttpResponse("No such URL exists")
    obj=row[0];
    longurl=obj.long_url;
    obj.clicks=obj.clicks+1;
    obj.save();
    return redirect(longurl);

def all_analytics(request):
    rows=LongToShort.objects.all()
    context={
        "rows":rows
    }
    return render(request,'all-analytics.html',context);