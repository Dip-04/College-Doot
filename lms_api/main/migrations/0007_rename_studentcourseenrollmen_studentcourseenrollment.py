# Generated by Django 4.2.3 on 2023-10-01 11:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0006_studentcourseenrollmen'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='StudentCourseEnrollmen',
            new_name='StudentCourseEnrollment',
        ),
    ]