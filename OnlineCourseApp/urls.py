from django.urls import path
from . import views

app_name = 'onlinecourse'
urlpatterns = [
    # Route for submitting exam
    path('<int:course_id>/submit/', views.submit, name='submit'),
    
    # Route for showing exam result
    path('<int:course_id>/submission/<int:submission_id>/result/', views.show_exam_result, name='show_exam_result'),
]
