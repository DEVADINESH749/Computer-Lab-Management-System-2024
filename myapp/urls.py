
from django.contrib import admin
from django.urls import path,include
from .import views
from django.urls import path
from .views import stlogin, streg, adlogin,adreg


urlpatterns = [
    path('',views.index,name='index'),
    path('home',views.home,name='home'),
    path('stlogin',views.stlogin,name='stlogin'),
    path('adlogin',views.adlogin,name='adlogin'),
    path('details',views.details,name='details'),
    path('contact',views.contact,name='contact'),
    path('feedback',views.feedback,name='feedback'),
    path('img3',views.img3,name='img3'),
    path('seatbca',views.seatbca,name='seatbca'),
    path('seatbsc',views.seatbsc,name="seatbsc"),
    path('seatmscit',views.seatmscit,name="seatmscit"),
    path('mphill',views.mphill,name="mphill"),
    path('adminhome',views.adminhome,name="adminhome"),
    path('streg',views.streg,name="streg"),
    path('adminmessage',views.adminmessage,name="adminmessage"),
    path('adreg',views.adreg,name='adreg'),
    
]

    
    
