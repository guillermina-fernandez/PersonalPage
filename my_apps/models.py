from django.db import models

# Create your models here.


class City(models.Model):
    city = models.CharField(max_length=100, unique=True)
    votes = models.IntegerField()

    class Meta:
        ordering = ('-votes', )

    def __str__(self):
        return self.city

