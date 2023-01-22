# Generated by Django 4.1.4 on 2023-01-19 04:57

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('newapp', '0008_delete_karbar'),
    ]

    operations = [
        migrations.CreateModel(
            name='karbar',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=15)),
                ('lastname', models.CharField(max_length=15)),
                ('address', models.CharField(max_length=150)),
                ('email', models.CharField(max_length=150)),
                ('password', models.CharField(max_length=150)),
                ('linkclass', models.CharField(max_length=150)),
                ('phone', models.IntegerField()),
            ],
        ),
    ]
