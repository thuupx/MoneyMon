from django.contrib import admin
from .models import User

class UserAdmin(admin.ModelAdmin):
    # fields = [ 'description', 'created_at']
    # fieldsets = [
    #     (None,               {'fields': ['email']}),
    #     ('Date information', {'fields': ['date_joined']}),
    # ]
    list_display = ('username', 'is_staff', 'is_active')
    list_filter = ['date_joined']
    search_fields = ['email', 'username']

admin.site.register(User, UserAdmin)
# Register your models here.
