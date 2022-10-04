from django import forms
from .models import City


class ShareBillForm(forms.Form):
    bill_total = forms.FloatField(widget=forms.TextInput(attrs={'class': 'form-control',
                                                                'type': 'number',
                                                                'step': '.01',
                                                                'min': '0'}))
    nbr_people = forms.IntegerField(widget=forms.TextInput(attrs={'class': 'form-control',
                                                                  'type': 'number',
                                                                  'min': 1}))
    TIP_OPTIONS = (('', ''), (0, '0 tip! Really bad service'), (5, '5%'), (10, '10%, the standard!'),
                   (15, '15%'), (20, '20%'), ('OTHER', 'Not feeling it, let me choose another!'))
    tip = forms.ChoiceField(choices=(TIP_OPTIONS), widget=forms.Select(attrs={'id': 'tip',
                                                                              'class': 'form-select',
                                                                              'onchange': 'checkTip()'}))
    custom_tip = forms.IntegerField(widget=forms.TextInput(attrs={'id': 'custom_tip',
                                                                  'class': 'form-control',
                                                                  'style': 'display: none',
                                                                  'type': 'number',
                                                                  'step': '.01',
                                                                  'min': '1'}))


class SantaForm(forms.Form):
    occasion = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control'}))
    min_budget = forms.FloatField(widget=forms.TextInput(attrs={'class': 'form-control',
                                                                'type': 'number',
                                                                'step': '.01',
                                                                'min': '0'}))
    max_budget = forms.FloatField(widget=forms.TextInput(attrs={'class': 'form-control',
                                                                'type': 'number',
                                                                'step': '.01',
                                                                'min': '0'}))


class CityForm(forms.ModelForm):
    class Meta:
        model = City
        fields = ['city', 'votes']
        widgets = {
            'city': forms.TextInput(attrs={'class': 'form-control',
                                           'autofocus': True}),
            'votes': forms.TextInput(attrs={'hidden': True,
                                            'value': 1})}

    def clean_city(self):
        return self.cleaned_data['city'].title()



