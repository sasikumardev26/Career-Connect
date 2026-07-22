from django.db import models



class Job(models.Model):

    
    title = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    salary = models.IntegerField()
    description = models.TextField()

    job_type = models.CharField(
        max_length=20,
        choices=[
            ("Full Time", "Full Time"),
            ("Part Time", "Part Time"),
            ("Internship", "Internship"),
            ("Remote", "Remote"),
        ]
    )

    experience = models.CharField(max_length=50)
    skills = models.TextField()
    vacancies = models.PositiveIntegerField(default=1)
    deadline = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class Application(models.Model):

    application_name = models.CharField(max_length=100)
    email = models.EmailField()

    phone = models.CharField(max_length=15)

    resume = models.FileField(
        upload_to="resumes/",
        null=True,
        blank=True
    )

    cover_letter = models.TextField(
        null=True,
        blank=True
    )

    status = models.CharField(
        max_length=20,
        choices=[
            ("Pending", "Pending"),
            ("Accepted", "Accepted"),
            ("Rejected", "Rejected")
        ],
        default="Pending"
    )

    applied_at = models.DateTimeField(auto_now_add=True)

    job = models.ForeignKey(
        Job,
        on_delete=models.CASCADE,
        related_name="applications"
    )

    def __str__(self):
        return self.application_name


