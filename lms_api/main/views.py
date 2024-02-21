from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView,ListAPIView
from .serializer import TeacherSerializer,CatrgorySerializer,CourseSerializer,ChapterSerializer,StudentSerializer,StudentCourseEnrollSerializer,CourseRatingSerializer,TeacherDashboardSerializer,StudentFavoriteCourseSerializer,StudentFavoriteCourseSerializerfetch,CourseSerializerADD,StudentAssignmentSerializer,StudentAssignmentSerializerfetch,StudentDashboardSerializer,NotificationSerializer,QuizSerializer,QuestionSerializer,AssignQuizCourseSerializer,CourseQuizSerializer,AttempQuizSerializer,StudyMaterialSerializer,StudentCourseEnrollSerializer1,TeacherStudentchatSerializer
from . import models
from rest_framework import permissions
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse, HttpResponse
from rest_framework import status
from rest_framework.response import Response
from django.http import Http404
from django.shortcuts import get_object_or_404
from django.db.models import Q
from django.shortcuts import render
class TeacherList(ListCreateAPIView):
    queryset = models.Teacher.objects.all()
    serializer_class = TeacherSerializer


class TeacherDashboard(RetrieveUpdateDestroyAPIView):
    queryset = models.Teacher.objects.all()
    serializer_class = TeacherDashboardSerializer
    
class StudentDashboard(RetrieveUpdateDestroyAPIView):
    queryset = models.Student.objects.all()
    serializer_class = StudentDashboardSerializer

class TeacherDetail(RetrieveUpdateDestroyAPIView):
    queryset = models.Teacher.objects.all()
    serializer_class = TeacherSerializer
@csrf_exempt
def TeacherLogin(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        
        try:
            teacherData = models.Teacher.objects.get(email=email, password=password)
            return JsonResponse({'bool': True,'teacher_id':teacherData.id})
        except models.Teacher.DoesNotExist:
            return JsonResponse({'bool': False})
    
    return HttpResponse(status=400)  # Bad request if not a POST request


class CategoryList(ListCreateAPIView):
    queryset = models.CourseCategory.objects.all()
    serializer_class = CatrgorySerializer


class AssignmentList(ListCreateAPIView):
    queryset = models.StudentAssignment.objects.all()
    serializer_class = StudentAssignmentSerializer

    def get_queryset(self):
        teacher_id = self.kwargs['teacher_id']
        student_id = self.kwargs['student_id']

        student=models.Student.objects.get(pk=student_id)
        teacher=models.Teacher.objects.get(pk=teacher_id)
        return models.StudentAssignment.objects.filter(student=student,teacher=teacher)

class MyAssignmentList(ListCreateAPIView):
    queryset = models.StudentAssignment.objects.all()
    serializer_class = StudentAssignmentSerializerfetch

    def get_queryset(self):
        student_id = self.kwargs['student_id']
        student=models.Student.objects.get(pk=student_id)
        models.Notification1.objects.filter(student=student,notif_for='student',notif_subject='assignment').update(notifread_status=True)
        return models.StudentAssignment.objects.filter(student=student)


class UpdateAssignment(RetrieveUpdateDestroyAPIView):
    queryset = models.StudentAssignment.objects.all()
    serializer_class = StudentAssignmentSerializerfetch


   
class CourseList(ListCreateAPIView):
    queryset = models.Course.objects.all()
    serializer_class = CourseSerializer

    def get_queryset(self):
        qs = super().get_queryset()
        search_string = self.kwargs.get('searchString')

        if search_string:
            return qs.filter(Q(title__icontains=search_string))
        else:
            return qs

class CourseListADD(ListCreateAPIView):
    queryset = models.Course.objects.all()
    serializer_class =CourseSerializerADD
    

   
class TeacherCourseList(ListCreateAPIView):
    serializer_class = CourseSerializer

    def get_queryset(self):
        teacher_id = self.kwargs['teacher_id']
        teacher = models.Teacher.objects.get(pk=teacher_id)
        return models.Course.objects.filter(teacher=teacher)
    
class CourseDetailView(RetrieveUpdateDestroyAPIView):
    queryset = models.Course.objects.all()
    serializer_class =CourseSerializer

    
class StudentFavoriteCourseList(ListCreateAPIView):
    queryset = models.StudentFavoriteCourse.objects.all()
    serializer_class = StudentFavoriteCourseSerializer

class StudentFavoriteCourseListfetch(ListCreateAPIView):
    queryset = models.StudentFavoriteCourse.objects.all()
    serializer_class = StudentFavoriteCourseSerializerfetch

   
    def get_queryset(self):
       if 'student_id' in self.kwargs:
           student_id = self.kwargs['student_id']
           student = models.Student.objects.get(pk=student_id)
           return models.StudentFavoriteCourse.objects.filter(student=student).distinct()
      

    
class ChapterList(ListCreateAPIView):
    queryset = models.Chapter.objects.all()
    serializer_class =ChapterSerializer

    
class CourseChapterList(ListCreateAPIView):
    serializer_class =ChapterSerializer
    
    def get_queryset(self):
        course_id = self.kwargs['course_id']
        course = models.Course.objects.get(pk=course_id)
        return models.Chapter.objects.filter(course=course)


    
class ChapterDetailView(RetrieveUpdateDestroyAPIView):
    queryset = models.Chapter.objects.all()
    serializer_class =ChapterSerializer

class TeacherDetailView(RetrieveUpdateDestroyAPIView):
    queryset = models.Course.objects.all()
    serializer_class =CourseSerializer


class StudentList(ListCreateAPIView):
    queryset = models.Student.objects.all()
    serializer_class = StudentSerializer

@csrf_exempt
def StudentLogin(request):
    if request.method == 'POST':
        enrollment_no = request.POST.get('enrollment_no')
        password = request.POST.get('password')
        
        try:
            studentData = models.Student.objects.get(enrollment_no=enrollment_no, password=password)
            return JsonResponse({'bool': True,'student_id':studentData.id})
        except models.Student.DoesNotExist:
            return JsonResponse({'bool': False})
    
    return HttpResponse(status=400)  # Bad request if not a POST request

class StudentEnrollCourseList(ListCreateAPIView):
    queryset = models.StudentCourseEnrollment.objects.all()
    serializer_class = StudentCourseEnrollSerializer


    
class StudentDetail(RetrieveUpdateDestroyAPIView):
    queryset = models.Student.objects.all()
    serializer_class = StudentSerializer


def fetch_enroll_status(request,student_id,course_id):
    student=models.Student.objects.filter(id=student_id).first()
    course=models.Course.objects.filter(id=course_id).first()
    enrollStatus=models.StudentCourseEnrollment.objects.filter(course=course,student=student).count()
    if enrollStatus:
        return JsonResponse({'bool':True}) 
    else:
        return JsonResponse({'bool':False})
    

class EnrolledStudentList1(ListAPIView):
    queryset = models.StudentCourseEnrollment.objects.all()
    serializer_class = StudentCourseEnrollSerializer1
    def get_queryset(self):
        if 'course_id' in self.kwargs:
            course_id = self.kwargs['course_id']
            course = models.Course.objects.get(pk=course_id)
            return models.StudentCourseEnrollment.objects.filter(course=course).distinct()
        elif 'teacher_id' in self.kwargs:
            teacher_id = self.kwargs['teacher_id']
            teacher = models.Teacher.objects.get(pk=teacher_id)
            return models.StudentCourseEnrollment.objects.filter(course__teacher=teacher).distinct()
        elif 'student_id' in self.kwargs:
            student_id = self.kwargs['student_id']
            student = models.Student.objects.get(pk=student_id)
            return models.StudentCourseEnrollment.objects.filter(student=student).distinct()

class EnrolledTeacherList(ListAPIView):
    queryset = models.Course.objects.all()
    serializer_class = CourseSerializer
    def get_queryset(self):
          if 'student_id' in self.kwargs:
            student_id = self.kwargs['student_id']
            sql=f"SELECT c.*, t.* FROM main_course AS c JOIN main_studentcourseenrollment AS e ON c.id = e.course_id JOIN main_teacher AS t ON c.teacher_id = t.id WHERE e.student_id ={student_id}"
            qs=models.Course.objects.raw(sql)
            print(qs)
            return qs
          

class EnrolledStudentList(ListAPIView):
    queryset = models.StudentCourseEnrollment.objects.all()
    serializer_class = StudentCourseEnrollSerializer

    def get_queryset(self):
        if 'course_id' in self.kwargs:
            course_id = self.kwargs['course_id']
            course = models.Course.objects.get(pk=course_id)
            return models.StudentCourseEnrollment.objects.filter(course=course).distinct()
        elif 'teacher_id' in self.kwargs:
            teacher_id = self.kwargs['teacher_id']
            teacher = models.Teacher.objects.get(pk=teacher_id)
            return models.StudentCourseEnrollment.objects.filter(course__teacher=teacher).distinct()
        elif 'student_id' in self.kwargs:
            student_id = self.kwargs['student_id']
            student = models.Student.objects.get(pk=student_id)
            return models.StudentCourseEnrollment.objects.filter(student=student).distinct()

        


class CourseRatingList(ListCreateAPIView):
    serializer_class = CourseRatingSerializer
    def get_queryset(self):
        course_id = self.kwargs['course_id']
        course = models.Course.objects.get(pk=course_id)
        return models.CourseRating.objects.filter(course=course)

def fetch_rating_status(request,student_id,course_id):
    student=models.Student.objects.filter(id=student_id).first()
    course=models.Course.objects.filter(id=course_id).first()
    ratingStatus=models.StudentCourseEnrollment.objects.filter(course=course,student=student).count()
    if ratingStatus:
        return JsonResponse({'bool':True}) 
    else:
        return JsonResponse({'bool':False})
    
@csrf_exempt
def teacherchangepassword(request,teacher_id):
    password=request.POST['password']
    try:
        teacherData=models.Teacher.objects.get(id=teacher_id)
    except models.Teacher.DoesNotExist:
        teacherData=None
    if teacherData:
              models.Teacher.objects.filter(id=teacher_id).update(password=password)
              return JsonResponse({'bool': True})
    else:
            return JsonResponse({'bool': False})

@csrf_exempt
def studentchangepassword(request, student_id):
    password=request.POST['password']
    try:
        studentData=models.Student.objects.get(id=student_id)
    except models.Student.DoesNotExist:
        studentData=None
    if studentData:
              models.Student.objects.filter(id=student_id).update(password=password)
              return JsonResponse({'bool': True})
    else:
            return JsonResponse({'bool': False})

def fetch_favorite_status(request,course_id,student_id):
    student=models.Student.objects.filter(id=student_id).first()       
    course=models.Course.objects.filter(id=course_id).first()
    favoriteStatus=models.StudentFavoriteCourse.objects.filter(course=course,student=student).first()
    if favoriteStatus and favoriteStatus.status==True:
        return JsonResponse({'bool':True})
    else:
        return JsonResponse({'bool':False})

@csrf_exempt
def remove_favorite_course(request,course_id,student_id):
    student=models.Student.objects.filter(id=student_id).first()       
    course=models.Course.objects.filter(id=course_id).first()
    favoriteStatus=models.StudentFavoriteCourse.objects.filter(course=course,student=student).delete()
    if favoriteStatus:
        return JsonResponse({'bool':True})
    else:
        return JsonResponse({'bool':False})
    

class NotificationList(ListCreateAPIView):
    queryset = models.Notification1.objects.all()
    serializer_class = NotificationSerializer

    def get_queryset(self):
        student_id = self.kwargs['student_id']
        student=models.Student.objects.get(pk=student_id)
        
        return models.Notification1.objects.filter(student=student,notif_for='student',notif_subject='assignment',notifread_status=False)

@csrf_exempt
def save_teacher_student_msg(request, teacher_id, student_id):
    if request.method == 'POST':
        try:
            teacher = models.Teacher.objects.get(id=teacher_id)
            student = models.Student.objects.get(id=student_id)
            msg_text = request.POST.get('msg_text')
            msg_from = request.POST.get('msg_from')

            msgRes = models.TeacherStudentchat.objects.create(
                teacher=teacher,
                student=student,
                msg_text=msg_text,
                msg_from=msg_from
            )

            if msgRes:
                return JsonResponse({'bool': True, 'msg': 'Message has been sent'})
            else:
                return JsonResponse({'bool': False, 'msg': 'Message creation failed'})

        except models.Teacher.DoesNotExist:
            return JsonResponse({'bool': False, 'msg': 'Teacher not found'})

        except models.Student.DoesNotExist:
            return JsonResponse({'bool': False, 'msg': 'Student not found'})
    else:
        return JsonResponse({'bool': False, 'msg': 'Invalid request method'})

@csrf_exempt
def save_student_teacher_msg(request, student_id, teacher_id):
    if request.method == 'POST':
        try:
            student = models.Student.objects.get(id=student_id)
            teacher = models.Teacher.objects.get(id=teacher_id)

            msg_text = request.POST.get('msg_text')
            msg_from = request.POST.get('msg_from')

            msgRes = models.TeacherStudentchat.objects.create(
                teacher=teacher,
                student=student,
                msg_text=msg_text,
                msg_from=msg_from
            )

            if msgRes:
                return JsonResponse({'bool': True, 'msg': 'Message has been sent'})
            else:
                return JsonResponse({'bool': False, 'msg': 'Message creation failed'})

        except models.Teacher.DoesNotExist:
            return JsonResponse({'bool': False, 'msg': 'Teacher not found'})

        except models.Student.DoesNotExist:
            return JsonResponse({'bool': False, 'msg': 'Student not found'})
    else:
        return JsonResponse({'bool': False, 'msg': 'Invalid request method'})


@csrf_exempt
def save_teacher_student_group_msg(request,teacher_id):
    if request.method == 'POST':
        try:
            teacher = models.Teacher.objects.get(id=teacher_id)
            msg_text = request.POST.get('msg_text')
            msg_from = request.POST.get('msg_from')
            enrollstudent=models.StudentCourseEnrollment.objects.filter(course__teacher=teacher).distinct()
            for enrolled in enrollstudent:

              msgRes = models.TeacherStudentchat.objects.create(
                teacher=teacher,
                student=enrolled.student,
                msg_text=msg_text,
                msg_from=msg_from
                )

            if msgRes:
                return JsonResponse({'bool': True, 'msg': 'Message has been sent'})
            else:
                return JsonResponse({'bool': False, 'msg': 'Message creation failed'})

        except models.Teacher.DoesNotExist:
            return JsonResponse({'bool': False, 'msg': 'Teacher not found'})

        except models.Student.DoesNotExist:
            return JsonResponse({'bool': False, 'msg': 'Student not found'})
    else:
        return JsonResponse({'bool': False, 'msg': 'Invalid request method'})







class MessageList(ListAPIView):
    queryset = models.TeacherStudentchat.objects.all()
    serializer_class =TeacherStudentchatSerializer
    def get_queryset(self):
            teacher_id = self.kwargs['teacher_id']
            student_id = self.kwargs['student_id']
            teacher=models.Teacher.objects.get(pk=teacher_id)
            student = models.Student.objects.get(pk=student_id)
            return models.TeacherStudentchat.objects.filter(teacher=teacher,student=student).exclude(msg_text='')
        



class Quizlist(ListCreateAPIView):
    queryset = models.Quiz.objects.all()
    serializer_class =QuizSerializer

class TeacherQuizlist(ListCreateAPIView):
    serializer_class =QuizSerializer
    
    def get_queryset(self):
        teacher_id = self.kwargs['teacher_id']
        teacher = models.Teacher.objects.get(pk=teacher_id)
        return models.Quiz.objects.filter(teacher=teacher)


class TeacherQuizDetail(RetrieveUpdateDestroyAPIView):
    queryset = models.Quiz.objects.all()
    serializer_class =QuizSerializer


    
class QuizDetailView(RetrieveUpdateDestroyAPIView):
    queryset = models.Quiz.objects.all()
    serializer_class =QuizSerializer

class QuizQuestionlist(ListCreateAPIView):
    serializer_class =QuestionSerializer
    
    def get_queryset(self):            
        quiz_id = self.kwargs['quiz_id']
        quiz = models.Quiz.objects.get(pk=quiz_id)
        if 'limit' in self.kwargs:
                    return models.QuizQuestions.objects.filter(quiz=quiz)[:1]
        elif 'next-question' in self.kwargs:
                    current_question=self.kwargs['question_id']
                    return models.QuizQuestions.objects.filter(quiz=quiz,question__id__gt=current_question).order_by('id')[:1]
        
        else:



          return models.QuizQuestions.objects.filter(quiz=quiz)


class QuestionDetailView(RetrieveUpdateDestroyAPIView):
    queryset = models.QuizQuestions.objects.all()
    serializer_class =QuestionSerializer    
class AssignQuizCourseList(ListCreateAPIView):
    queryset = models.CourseQuiz.objects.all()
    serializer_class = AssignQuizCourseSerializer

class CourseQuizList(ListCreateAPIView):
    queryset = models.CourseQuiz.objects.all()
    serializer_class = CourseQuizSerializer
    
    def get_queryset(self):
        if 'course_id' in self.kwargs:
            course_id = self.kwargs['course_id']
            course = models.Course.objects.get(pk=course_id)
            return models.CourseQuiz.objects.filter(course=course)
        

class AttemptQuizList(ListCreateAPIView):
    queryset = models.AttempQuiz.objects.all()
    serializer_class = AttempQuizSerializer
    
class StudyMaterialList(ListCreateAPIView):
    serializer_class =StudyMaterialSerializer
    
    def get_queryset(self):
        course_id = self.kwargs['course_id']
        course = models.Course.objects.get(pk=course_id)
        return models.StudyMaterial.objects.filter(course=course)



class StudyMaterialDetailView(RetrieveUpdateDestroyAPIView):
    queryset = models.StudyMaterial.objects.all()
    serializer_class =StudyMaterialSerializer 

    