from django.db import models

# Create your models here.
class fieldlabour(models.Model):
    firstname = models.CharField(max_length=10)
    lastname = models.CharField(max_length=10)
    emp_id = models.IntegerField()
    age = models.IntegerField()
    status=models.CharField(max_length=10)
    work_Skills = models.CharField(max_length=20)
    work_Experience=models.CharField(max_length=20)
    perfomance= models.CharField(max_length=10)
    phone_number=models.CharField(max_length=10)
    address=models.CharField(max_length=20)

    def __str__(self):
        return self.firstname



class farmer(models.Model):
    firstname = models.CharField(max_length=10)
    lastname = models.CharField(max_length=10)
    farmer_id = models.IntegerField()
    age = models.IntegerField()
    work_Skills_Required = models.CharField(max_length=20)
    work_Experience_Required=models.CharField(max_length=20)
    stipend=models.IntegerField()
    phone_number=models.CharField(max_length=10)








