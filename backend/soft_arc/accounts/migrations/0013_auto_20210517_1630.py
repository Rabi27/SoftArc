# Generated by Django 3.1.7 on 2021-05-17 11:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0012_auto_20210514_2205'),
    ]

    operations = [
        migrations.AlterField(
            model_name='useraccount',
            name='image',
            field=models.ImageField(upload_to='images', verbose_name='Image'),
        ),
    ]