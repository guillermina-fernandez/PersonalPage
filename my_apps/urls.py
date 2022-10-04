from django.urls import path
from . import views


urlpatterns = [
    path('guillerminafernandez/', views.OpenApp.as_view(), name='myfunapps'),
    path('yourBill/', views.ShowBill.as_view(), name='showBill'),
]
