from django.urls import path
from . import views

urlpatterns = [
    path("index/", views.index, name="Home"),
    path("about/", views.about, name="ABOUT US"),
    path("sdah/", views.sdah, name="SDAH page"),
    path("contact/", views.contact, name="Contact"),
    path("search/", views.search, name="Search"),
    path("productview/", views.productView, name="ProductView"),
]
