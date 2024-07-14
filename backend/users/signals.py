from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Detalhes
from .utils import send_admin_notification

@receiver(post_save, sender=Detalhes)
def send_email_on_user_registration(sender, instance, created, **kwargs):
    if created:
        send_admin_notification(instance.user)

