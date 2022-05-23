# Generated by Django 4.0.4 on 2022-05-21 13:34

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('subscription', '0002_alter_subscription_date'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='subscription',
            options={'verbose_name': '청약', 'verbose_name_plural': '청약'},
        ),
        migrations.AlterModelOptions(
            name='usersubscription',
            options={'verbose_name': '사용자', 'verbose_name_plural': '사용자들'},
        ),
        migrations.RemoveField(
            model_name='subscription',
            name='date',
        ),
        migrations.AddField(
            model_name='subscription',
            name='address',
            field=models.CharField(max_length=100, null=True, verbose_name='건물 주소'),
        ),
        migrations.AddField(
            model_name='subscription',
            name='end_date',
            field=models.DateField(default=datetime.date.today, verbose_name='청약 종료 날짜'),
        ),
        migrations.AlterField(
            model_name='subscription',
            name='name',
            field=models.CharField(max_length=500, null=True, verbose_name='건물명'),
        ),
        migrations.AlterField(
            model_name='subscription',
            name='sub_id',
            field=models.IntegerField(default=0, verbose_name='공고 번호'),
        ),
    ]