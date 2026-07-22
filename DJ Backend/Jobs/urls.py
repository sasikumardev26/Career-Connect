from django.urls import path
from .views import JobView, ApplicationView

urlpatterns = [
    path("jobs/", JobView.as_view(), name="jobs"),
    path("jobs/<int:id>/", JobView.as_view(), name="job-detail"),

    path("applications/", ApplicationView.as_view(), name="applications"),
    path("applications/<int:id>/", ApplicationView.as_view(), name="application-detail"),
]
