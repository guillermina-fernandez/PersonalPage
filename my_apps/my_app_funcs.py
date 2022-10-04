from fillpdf import fillpdfs
from random import randint


def getBill(total, tip, people, per_person):
    fillpdfs.write_fillable_pdf('temp/receipt.pdf', 'temp/new_receipt.pdf',
                                {'total': '$ {}'.format(total),
                                 'tip': '$ {}'.format(tip),
                                 'people': people,
                                 'per_person': '$ {}'.format(per_person)},
                                flatten=True)

def getSantas(santa_data):
    or_santa_list = santa_data.split(',')
    or_santa_list.pop(-1)
    santa_list = []
    for santa_item in or_santa_list:
        info_santa = santa_item.split('/')
        info_santa.append(randint(1, 10**2))
        santa_list.append(info_santa)

    santa_list = sorted(santa_list, key=lambda x: x[2])
    my_santas = []
    for num_santa in range(len(santa_list)-1):
        santa_dict = {}
        santa_dict['name'] = santa_list[num_santa][0]
        santa_dict['email'] = santa_list[num_santa][1]
        santa_dict['gives_to'] = santa_list[num_santa+1][0]
        my_santas.append(santa_dict)
    santa_dict = {'name': santa_list[-1][0], 'email': santa_list[-1][1], 'gives_to': santa_list[0][0]}
    my_santas.append(santa_dict)
    return my_santas



