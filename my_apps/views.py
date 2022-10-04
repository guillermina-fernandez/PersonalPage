import time

from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import View

from .forms import ShareBillForm, SantaForm, CityForm
from .models import City
from .my_app_funcs import getBill, getSantas

from django.http import FileResponse

from django.core.mail import send_mail


# Create your views here.


class ShowBill(View):
    def get(self):
        for attempts in range(30):
            try:
                time.sleep(1)
                return FileResponse(open('E:/PyProjects/personalpage/temp/new_receipt.pdf', 'rb'),
                                    content_type='application/pdf')
            except FileNotFoundError:
                pass


class OpenApp(View):
    def get(self, request):
        return render(request, 'personalpage.html', {'shareBillForm': ShareBillForm(),
                                                'santaForm': SantaForm(),
                                                'cities': City.objects.all(),
                                                'cityForm': CityForm()})

    def post(self, request):
        if request.method == 'POST':
            if 'calculate_bill' in request.POST:
                bill_total = float(request.POST.get('bill_total'))
                nbr_people = int(request.POST.get('nbr_people'))
                tip = request.POST.get('tip')
                custom_tip = request.POST.get('custom_tip')
                final_tip = tip
                if tip == 'OTHER':
                    final_tip = custom_tip
                leave_tip = round(bill_total * float(final_tip) / 100, 2)
                total_with_tip = round(bill_total + leave_tip, 2)
                total_per_person = round(total_with_tip / nbr_people, 2)
                getBill(str(bill_total), str(leave_tip), str(nbr_people), str(total_per_person))
            if 'get_santas' in request.POST:
                occasion = request.POST.get('occasion')
                min_budget = request.POST.get('min_budget')
                max_budget = request.POST.get('max_budget')
                santa_data = request.POST.get('santa_data')
                my_santas = getSantas(santa_data)
                for santa in my_santas:
                    person = santa['name']
                    email = santa['email']
                    gives_to = santa['gives_to']
                    message = "Hi {}! Your secret Santa for {} is {}. Please note that the minimum budget is {} and " \
                              "the maximum budget is {} (remember, zero means there's no limit). Thanks for using my " \
                              "app!".format(person.title(), occasion.lower(), gives_to.title(), min_budget, max_budget)
                    send_mail(
                        "Find out who's your secret Santa!", message, 'guillermina.m.fernandez1987@gmail.com', [email])
            if 'btn_message' in request.POST:
                print('this')
                name = request.POST.get('name_contact')
                message = request.POST.get('message_contact')
                send_mail('Contact Message from {}'.format(name), message, 'guillermina.m.fernandez1987@gmail.com',
                          ['guillermina.m.fernandez1987@gmail.com'])
            if 'addCity' in request.POST:
                formCity = CityForm(request.POST)
                if formCity.is_valid():
                    formCity.save()
                else:
                    city = formCity.data['city'].title()
                    votes = City.objects.get(city=city).votes
                    City.objects.filter(city=city).update(votes=votes + 1)
            if 'vote_city' in request.POST:
                voted_city = request.POST.get('vote_city')
                city = City.objects.get(city=voted_city)
                votes = city.votes
                City.objects.filter(city=city).update(votes=votes + 1)
            return HttpResponse('<script>history.back();</script>')
