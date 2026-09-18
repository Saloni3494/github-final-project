from django.shortcuts import render, get_object_or_404, redirect
from django.urls import reverse
from .models import Course, Question, Choice, Submission, Enrollment

# <HINT> Create a submit function to evaluate the exam and save submissions
def submit(request, course_id):
    course = get_object_or_404(Course, pk=course_id)
    if request.method == 'POST':
        # Create a new submission object
        # Note: in a real app, you would get the enrollment based on the logged-in user.
        # For this assignment, we'll assume a dummy enrollment for demonstration
        enrollment, created = Enrollment.objects.get_or_create(course=course, user_id=1)
        submission = Submission.objects.create(enrollment=enrollment)
        
        # Check all questions
        for question in course.question_set.all():
            choice_id = request.POST.get(f'question_{question.id}')
            if choice_id:
                choice = get_object_or_404(Choice, pk=choice_id)
                submission.choices.add(choice)
                
        submission.save()
        return redirect('onlinecourse:show_exam_result', course_id=course.id, submission_id=submission.id)
        
    return render(request, 'onlinecourse/exam_result.html', {'course': course})

# <HINT> Create a show_exam_result function to display the result
def show_exam_result(request, course_id, submission_id):
    course = get_object_or_404(Course, pk=course_id)
    submission = get_object_or_404(Submission, pk=submission_id)
    
    # Calculate score
    total_questions = course.question_set.count()
    correct_answers = 0
    for choice in submission.choices.all():
        if choice.is_correct:
            correct_answers += 1
            
    score = (correct_answers / total_questions) * 100 if total_questions > 0 else 0
    passed = score >= 70
    
    context = {
        'course': course,
        'submission': submission,
        'score': score,
        'passed': passed
    }
    return render(request, 'onlinecourse/exam_result.html', context)
