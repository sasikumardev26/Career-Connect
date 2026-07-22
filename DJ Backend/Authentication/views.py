from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from .serializers import RegisterSerializer
from .models import User
from .serializers import UserSerializer


class RegisterView(APIView):

    def post(self, request):

        serializer = RegisterSerializer(data=request.data)

        if serializer.is_valid():

            user = serializer.save()

            refresh = RefreshToken.for_user(user)

            return Response({

                "message": "User Registered Successfully",

                "refresh": str(refresh),

                "access": str(refresh.access_token),

                "role": user.role,

                "username": user.username

            }, status=status.HTTP_201_CREATED)

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )


class LoginView(APIView):

    def post(self, request):

        username = request.data.get("username")
        password = request.data.get("password")

        user = authenticate(
            username=username,
            password=password
        )

        if user:

            refresh = RefreshToken.for_user(user)

            return Response({

                "message": "Login Successful",

                "refresh": str(refresh),

                "access": str(refresh.access_token),

                "role": user.role,

                "username": user.username

            }, status=status.HTTP_200_OK)

        return Response({

            "message": "Invalid Username or Password"

        }, status=status.HTTP_401_UNAUTHORIZED)
class UserListView(APIView):

    def get(self, request):

        users = User.objects.all().order_by("-id")

        serializer = UserSerializer(
            users,
            many=True
        )

        return Response(serializer.data)