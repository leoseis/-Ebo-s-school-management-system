from django.db import models

# Create your models here.


from django.db import models

class Student(models.Model):
    studentId = models.AutoField(primary_key=True)
    FirstName = models.CharField(max_length=100)
    LastName = models.CharField(max_length=100)
    RegistrationNo = models.CharField(max_length=100)
    Email = models.CharField(max_length=100)
    Course = models.CharField(max_length=100)

    

    

    def __str__(self):
        return 

    def __unicode__(self):
        return 
