from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from django.core.mail import send_mail
from django.conf import settings

from .models import Job, Application
from .serializers import JobSerializer, ApplicationSerializer


class JobView(APIView):

    # Create Job
    def post(self, request):

        serializer = JobSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response(
                {
                    "message": "Job Created Successfully",
                    "data": serializer.data
                },
                status=status.HTTP_201_CREATED
            )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # Get All Jobs / Single Job
    def get(self, request, id=None):

        if id:
            job = get_object_or_404(Job, id=id)
            serializer = JobSerializer(job)
            return Response(serializer.data)

        jobs = Job.objects.all()
        serializer = JobSerializer(jobs, many=True)
        return Response(serializer.data)

    # Update Job
    def patch(self, request, id):

        job = get_object_or_404(Job, id=id)

        serializer = JobSerializer(
            job,
            data=request.data,
            partial=True
        )

        if serializer.is_valid():
            serializer.save()

            return Response(
                {
                    "message": "Job Updated Successfully",
                    "data": serializer.data
                }
            )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # Delete Job
    def delete(self, request, id):

        job = get_object_or_404(Job, id=id)
        job.delete()

        return Response(
            {
                "message": "Job Deleted Successfully"
            },
            status=status.HTTP_200_OK
        )


class ApplicationView(APIView):

    parser_classes = (
        MultiPartParser,
        FormParser,
        JSONParser,
    )

    # Apply Job
    def post(self, request):

        serializer = ApplicationSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response(
                {
                    "message": "Application Submitted Successfully",
                    "data": serializer.data,
                },
                status=status.HTTP_201_CREATED,
            )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # Get Applications
    def get(self, request, id=None):

        if id:
            application = get_object_or_404(Application, id=id)
            serializer = ApplicationSerializer(application)
            return Response(serializer.data)

        applications = Application.objects.all()
        serializer = ApplicationSerializer(applications, many=True)
        return Response(serializer.data)

    # Update Application Status
    def patch(self, request, id):

        application = get_object_or_404(Application, id=id)

        old_status = application.status

        serializer = ApplicationSerializer(
            application,
            data=request.data,
            partial=True
        )

        if serializer.is_valid():

            serializer.save()

            application.refresh_from_db()

            # Send email only if status changed
            if old_status != application.status:

                if application.status == "Accepted":

                    send_mail(
                        subject="🎉 Job Application Accepted",
                        message=f"""
Hi {application.application_name},

Congratulations!

Your application for

Job Title : {application.job.title}
Company : {application.job.company}

has been ACCEPTED.

The recruiter will contact you shortly.

Thank you.

CareerConnect Team
                        """,
                        from_email=settings.DEFAULT_FROM_EMAIL,
                        recipient_list=[application.email],
                        fail_silently=False,
                    )

                elif application.status == "Rejected":

                    send_mail(
                        subject="Job Application Status",
                        message=f"""
Hi {application.application_name},

Thank you for applying for

Job Title : {application.job.title}
Company : {application.job.company}

After reviewing your application,
we have decided to move forward with another candidate.

Don't worry.

Keep applying for new opportunities.

Best Wishes,
CareerConnect Team
                        """,
                        from_email=settings.DEFAULT_FROM_EMAIL,
                        recipient_list=[application.email],
                        fail_silently=False,
                    )

            return Response(
                {
                    "message": "Application Updated Successfully",
                    "data": serializer.data
                }
            )

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )

    # Delete Application
    def delete(self, request, id):

        application = get_object_or_404(Application, id=id)

        application.delete()

        return Response(
            {
                "message": "Application Deleted Successfully"
            },
            status=status.HTTP_200_OK
        )