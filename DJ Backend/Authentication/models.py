from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):

    # Phone Number
    phone_number = models.CharField(
    max_length=10,
    unique=True,
    null=True,
    blank=True
   )

    # User Role
    ROLE_CHOICES = [
        ('admin', 'Admin'),
        ('student', 'Student'),
        ('recruiter', 'Recruiter'),
    ]

    role = models.CharField(
        max_length=20,
        choices=ROLE_CHOICES,
        default='student'
    )

    # Profile Image
    profile_image = models.ImageField(
        upload_to='profile/',
        null=True,
        blank=True
    )

    # Resume Upload
    resume = models.FileField(
        upload_to='resume/',
        null=True,
        blank=True
    )

    # College Name
    college = models.CharField(
        max_length=100,
        null=True,
        blank=True
    )

    # Address
    address = models.TextField(
        null=True,
        blank=True
    )

    # Created & Updated Time
    created_at = models.DateTimeField(
        auto_now_add=True
    )

    updated_at = models.DateTimeField(
        auto_now=True
    )

    def __str__(self):
        return self.username