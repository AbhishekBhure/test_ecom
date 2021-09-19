from django.shortcuts import render
from .models import Product
from math import ceil


# from django.http import HttpResponse


# Create your views here.

def index(request):
    products = Product.objects.all()
    # print(products)
    # n = len(products)
    # nSlides = n//4 + ceil((n/4 - (n//4)))
    allProds = []
    cate_prod = Product.objects.values('category', 'id')
    categories = {item['category'] for item in cate_prod}
    for cat in categories:
        prod = Product.objects.filter(category = cat)
        n = len(products)
        nSlides = n//4 + ceil((n/4 - (n//4)))
        allProds.append([prod, range(1, nSlides), nSlides ])
    # params ={'no_of_slides': nSlides, 'range': range(nSlides), 'product': products}
    # allProds = [[products, range(1, nSlides), nSlides]]
    params = {'allProds': allProds}
    return render(request, 'SDAHweb/index.html', params)


def sdah(request):
    return render(request, 'SDAHweb/SDAH.html')


def about(request):
    return render(request, 'SDAHweb/about.html')


def contact(request):
    return render(request, 'SDAHweb/contact.html')


def search(request):
    return render(request, 'SDAHweb/search.html')


def productView(request):
    return render(request, 'SDAHweb/productView.html')
