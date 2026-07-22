from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User


@admin.register(User)
class CustomUserAdmin(UserAdmin):

    list_display = (
        "id",
        "username",
        "email",
        "phone_number",
        "role",
        "is_staff",
    )

    search_fields = (
        "username",
        "email",
        "phone_number",
    )

    list_filter = (
        "role",
        "is_staff",
        "is_superuser",
    )