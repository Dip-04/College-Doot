# Generated by Django 4.2.3 on 2023-10-26 11:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0016_notification'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='notification',
            options={'verbose_name_plural': '10. Notifications '},
        ),
        migrations.RemoveField(
            model_name='notification',
            name='notif_text',
        ),
    ]
