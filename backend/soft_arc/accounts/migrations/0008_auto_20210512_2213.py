# Generated by Django 3.1.7 on 2021-05-12 17:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0007_auto_20210510_2043'),
    ]

    operations = [
        migrations.RenameField(
            model_name='useraccount',
            old_name='fullname',
            new_name='name',
        ),
    ]