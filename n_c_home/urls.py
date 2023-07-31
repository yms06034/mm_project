from django.urls import path
from n_c_home import views as v

app_name='app'

urlpatterns = [
    path("", v.index, name='index'),
    path("auth/login", v.login, name='login'),
    path("auth/find_id", v.find_id, name='find_id'),
    path("auth/find_pwd", v.find_pwd, name='find_pwd'),
    path("auth/register", v.register, name='register'),
    path("borad/faq_customer", v.cs_customer, name='cs_customer')
]