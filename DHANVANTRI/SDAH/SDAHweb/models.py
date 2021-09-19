from django.contrib.admin.sites import DefaultAdminSite
from django.db import models


# Create your models here.
class Product(models.Model):
    product_id = models.AutoField
    product_name = models.CharField(max_length=50)
    category = models.CharField(max_length=50, default="")
    subcategory = models.CharField(max_length=50, default="")
    price = models.IntegerField(default=0)
    desc = models.CharField(max_length=100)
    pub_date = models.DateTimeField()
    image = models.ImageField(upload_to="SDAHweb/images", default="")

    def __str__(self):
        return self.product_name