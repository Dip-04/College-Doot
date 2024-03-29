# Generated by Django 4.2.3 on 2023-10-01 10:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_teacher_featured_img'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='student',
            name='address',
        ),
        migrations.RemoveField(
            model_name='student',
            name='full_name',
        ),
        migrations.RemoveField(
            model_name='student',
            name='interested_categories',
        ),
        migrations.RemoveField(
            model_name='student',
            name='qulification',
        ),
        migrations.AddField(
            model_name='student',
            name='department',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='student',
            name='division',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='student',
            name='enrollment_no',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='student',
            name='featured_img',
            field=models.ImageField(null=True, upload_to='teacher_imgs/'),
        ),
        migrations.AddField(
            model_name='student',
            name='first_name',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='student',
            name='last_name',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='student',
            name='rollno',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='student',
            name='email',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='student',
            name='mobile_no',
            field=models.CharField(max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='student',
            name='password',
            field=models.CharField(max_length=100, null=True),
        ),
    ]
