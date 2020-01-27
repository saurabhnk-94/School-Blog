from django.db import models

# Create your models here.

class Posts(models.Model):
    title = models.CharField(max_length=100, help_text="Enter the title")
    post =  models.TextField(max_length=500, help_text="Enter the posts")

    def __str__(self):
        return self.title + " " + self.post[0:10]
