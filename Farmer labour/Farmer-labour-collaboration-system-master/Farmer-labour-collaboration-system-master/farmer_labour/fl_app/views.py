from django.shortcuts import render,redirect
from .forms import UserRegisterForm,ProfileUpdateForm,UserUpdateForm
from django.contrib.auth.decorators import login_required
import pickle
import re
from django.contrib import messages
from .models import Profile,relation1,frtable,lrtable,labourcheck,farmercheck

# Create your views here.
def home(request):
    return  render(request,'fl_app/home.html')

def register(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save()

            username = form.cleaned_data.get('username')
            return redirect('login')
    else:
        form = UserRegisterForm()
    return render(request, 'fl_app/register.html', {'form': form,})



def mainpage(request):
    return render(request, 'fl_app/fl_home_page.html')

def updateprofile(request):
    if request.method == 'POST':
        u_form = UserUpdateForm(request.POST, instance=request.user)
        p_form = ProfileUpdateForm(request.POST,
                                   request.FILES,
                                   instance=request.user.profile)
        if u_form.is_valid() and p_form.is_valid():
            u_form.save()
            p_form.save()
            messages.success(request, f'Your account has been updated!')
            return render(request, 'fl_app/fl_home_page.html')


    else:
        u_form = UserUpdateForm(instance=request.user)
        p_form = ProfileUpdateForm(instance=request.user.profile)

    context = {
        'u_form': u_form,
        'p_form': p_form
    }

    return render(request, 'fl_app/profile.html', context)


def availfarmers(request):
    frtable1=frtable.objects.all()
    availfarmerslist=[]
    for ins in frtable1:
        if(ins.labourcount<=0):
            ins.delete()
        else:
            availfarmerslist.append(ins)
    return render(request, 'fl_app/avilablefarmers.html', {'availfarmerslist':availfarmerslist})

def availlabours(request):
    lrtable1=lrtable.objects.all()
    availlabourslist=[]
    for ins in lrtable1:
        availlabourslist.append(ins)
    return render(request, 'fl_app/availlabours.html', {'availlabourslist':availlabourslist})


def reqfarmers(request):
    if request.method == 'POST':
         crr = request.user
         s1=request.POST.get('startdate')
         all=lrtable.objects.all()
         for i in all:
            if(str(i.lname)==str(crr.username) and str(s1)==str(i.startdate)):
                return render(request,'fl_app/sorrylabour.html')

         all1 = labourcheck.objects.all()
         for i in all:
             if (str(i.lname) == str(crr.username) and str(s1) == str(i.startdate)):
                 return render(request, 'fl_app/sorrylabour.html')


         a = lrtable.objects.create(
            lname=crr,
            typework=request.POST.get('typework'),

            startdate=request.POST.get('startdate'),
            enddate=request.POST.get('enddate'))
         a.save()

         return render(request, 'fl_app/fl_home_page.html')
    return render(request,'fl_app/reqfarmers.html')


def reqlabours(request):
    if request.method == 'POST':
        crr = request.user


        t1 = request.POST.get('typework')
        s1 = request.POST.get('startdate')

        all = frtable.objects.all()

        for i in all:
            if (str(i.fname) == str(crr.username) and
                    str(s1) == str(i.startdate) and
                    str(t1)==str(i.typework)):
                return render(request, 'fl_app/sorryfarmer.html')

        vv=farmercheck.objects.all()
        for i in vv:
            if (str(i.fname) == str(crr.username) and
                    str(s1) == str(i.startdate) and
                    str(t1) == str(i.typework)):
                return render(request, 'fl_app/sorryfarmer.html')

        a = frtable.objects.create(
            fname=crr,
            typework=request.POST.get('typework'),

            startdate=request.POST.get('startdate'),
            enddate=request.POST.get('enddate'),
            labourcount=request.POST.get('labourcount'))
        a.save()
        return render(request, 'fl_app/fl_home_page.html')
    return render(request,'fl_app/reqlabours.html')






















#
def relation11(request,value=-1):
    if request.method == 'POST':
        crr=request.user

        fi=frtable.objects.get(id=value)

        s1=fi.startdate

        vv=labourcheck.objects.all()

        for i in vv:
            if (str(i.lname) == str(crr.username) and
                    str(s1) == str(i.startdate) ):

                return render(request, 'fl_app/sorrylabour.html')



        ins1=frtable.objects.all()
        availfarmerslist = []

        for i in ins1:
            if(int(i.id)==value):

                a=relation1.objects.create(fname=i.fname,
                                           lname=crr,
                                           typework=str(i.typework)
                                           ,startdate=i.startdate,
                                           enddate=i.enddate)
                a.save()


                i.labourcount=int(i.labourcount)-1
                i.save()

                b = labourcheck.objects.create(lname=crr,startdate=i.startdate)
                b.save()

            if (i.labourcount <= 0):
                c = farmercheck.objects.create(fname=i.fname, startdate=i.startdate)
                b.save()
                i.delete()

            else:
                availfarmerslist.append(i)

        return render(request, 'fl_app/fl_home_page.html')

#farmer going to accept labour in availlable labours list
def relation22(request, value=-1):
    if request.method == 'POST':


        crr=request.user
        print(value)
        li=lrtable.objects.get(id=value)

        s1=li.startdate
        t1=li.typework

        vv=farmercheck.objects.all()

        for i in vv:
            if ((str(i.fname)==crr.username) and (str(t1)==str(i.typework)) and
                    (str(s1) == str(i.startdate))):
                return render(request, 'fl_app/sorryfarmer.html')





        ins1 = lrtable.objects.all()
        availlabourslist = []

        for i in ins1:
            if (int(i.id) == int(value)):
                a = relation1.objects.create(lname=i.lname,
                                             fname=crr,
                                             typework=str(i.typework)
                                             , startdate=i.startdate,
                                             enddate=i.enddate)

                a.save()

                i.delete()

            else:
                availlabourslist.append(i)

        return render(request, 'fl_app/availlabours.html', {'availlabourslist': availlabourslist})


def remove(request,value):
    crr=request.user

    #as a farmer

    all=relation1.objects.all()

    for k in all:
        if(k.id==value):
            s1=k.startdate
            t1=k.typework
            n1=k.lname

            k.delete()

            ll=labourcheck.objects.all()

            for nn in ll:
                if (nn.lname == n1 and nn.startdate == s1 ):
                    nn.delete()


            vl=farmercheck.objects.all()

            for mm in vl:
                if(vl.fname==crr.username and vl.startdate==s1 and vl.typework==t1):
                    mm.count=mm.count-1
                    if(mm.count<=0):
                        mm.delete()
        break


    return history(request)


def history(request):

    crr=request.user
    all=relation1.objects.all()
    asf=[]
    asl=[]
    for nn in all:
        print(nn.fname,crr.username)
        if(str(nn.fname)==str(crr.username)):
            asf.append(nn)
        if(str(nn.lname)==str(crr.username)):
            asl.append(nn)

        print("ada")

    return render(request,'fl_app/history.html',{'asf':asf,'asl':asl})

























































