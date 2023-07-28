from django.urls import path
from n_c_home import views as v

app_name='app'

urlpatterns = [
    path("", v.index, name='index'),
    path("login", v.login, name='login'),
    path("find_id", v.find_id, name='find_id'),
    path("find_pwd", v.find_pwd, name='find_pwd'),
    path("register", v.register, name='register'),
]