from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth import get_user_model
from .utils import send_admin_notification

User = get_user_model()

@receiver(post_save, sender=User)
def send_email_on_user_registration(sender, instance, created, **kwargs):
    if created:
        send_admin_notification(instance)
