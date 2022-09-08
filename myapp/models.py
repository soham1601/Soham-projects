from django.db import models


class LongToShort(models.Model):
    long_url=models.URLField(max_length=500)
    short_url=models.CharField(max_length=100, unique=True)
    date=models.DateField(auto_now_add=True)
    clicks=models.IntegerField(default=0)
