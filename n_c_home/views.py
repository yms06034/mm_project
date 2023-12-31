from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse, HttpResponse
from django.contrib.auth.models import User
from django. contrib import auth
from django.contrib.auth.forms import AuthenticationForm, PasswordResetForm, PasswordChangeForm
from django.contrib.auth.decorators import login_required
from selenium.common.exceptions import *
import urllib.error

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, scoped_session
from sqlalchemy.sql import text, intersect

import pandas as pd
import numpy as np
import json

# Create your views here.
def index(request):
    return render(request, 'index.html')

def login(request):
    return render(request, 'auth/login.html')

def find_id(request):
    return render(request, 'auth/find_id.html')

def find_pwd(request):
    return render(request, 'auth/find_pwd.html')

def register(request):
    return render(request, 'auth/registration.html')

def cs_customer(request):
    return render(request, 'customerService/cs_main.html')