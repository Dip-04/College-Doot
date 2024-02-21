from rest_framework import serializers
from . import models
from .models import CourseQuiz
from django.core.mail import send_mail

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Teacher
        fields = ['id', 'first_name', 'last_name', 'detail', 'email', 'password', 'qulification', 'mobile_no', 'address', 'teacher_courses', 'featured_img']
        depth = 2

    # def create(self, validate_data):
    #     email = validate_data['email']
    #     otp_digit = validate_data['otp_digit']
    #     instance = super(TeacherSerializer, self).create(validate_data)
    #     send_mail('Verify Account',
    #               'Please Verify your account',
    #               'diptishgohane04@gmail.com',
    #               [email],
    #               fail_silently=False,
    #               html_message=f'<p>Your OTP is </p><p>{otp_digit}</p>',
    #               )
    #     return instance
   

    # def create(self, validated_data):
    #     email = validated_data['email']
    #     otp_digit = validated_data['otp_digit']
    #     instance = super(TeacherSerializer, self).create(validated_data)
    #     send_mail('Verify Account',
    #               'Please Verify your account',
    #               'diptishgohane04@gmail.com',
    #               [email],
    #               fail_silently=False,
    #               html_message=f'<p>Your OTP is </p><p>{otp_digit}</p>',
    #               )
    #     return instance

    # class Meta:
    #     model = models.Teacher
    #     fields = ['id','first_name','last_name', 'detail','email', 'password', 'qulification', 'mobile_no', 'address','otp_digit','teacher_courses','featured_img']
    #     depth=2

    # def create(self,validate_data):
    #         email=self.validate_data['email']
    #         otp_digit=self.validate_data['otp_digit']
    #         instance=super(TeacherSerializer,self).create(validate_data)
    #         send_mail('Verify Account',
    #                   'Please Verify your account',
    #             'diptishgohane04@gmail.com',
    #             [email],
    #             fail_silently=False,
    #             html_message=f'<p>Your OTP is </p><p>{otp_digit}</p>',

    #         )

    #         return instance
    #     # def __int__(self,*args,**kwargs):
    #     #     super(TeacherSerializer,self).__init__(*args,**kwargs)
    #     #     request=self.context.get('request')
    #     #     self.Meta.depth=0
    #     #     if request and request.method=='GET':
    #     #         self.Meta.depth=1
class CatrgorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CourseCategory
        fields = ['id','title', 'discription',]
    def __int__(self,*args,**kwargs):
            super(CatrgorySerializer,self).__init__(*args,**kwargs)
            request=self.context.get('request')
            self.Meta.depth=0
            if request and request.method=='GET':
                self.Meta.depth=2
class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Course
        fields = ['id','category', 'teacher','title','description','featured_img','techs','course_chapters','related_vidoes','total_enrolled_students','course_rating']
        depth=2
class CourseSerializerADD(serializers.ModelSerializer):
    class Meta:
        model = models.Course
        fields = ['id','category', 'teacher','title','description','featured_img','techs','course_chapters','related_vidoes','total_enrolled_students','course_rating']
    def __int__(self,*args,**kwargs):
            super(CatrgorySerializer,self).__init__(*args,**kwargs)
            request=self.context.get('request')
            self.Meta.depth=0
            if request and request.method=='GET':
                self.Meta.depth=2


class ChapterSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Chapter
        fields = ['id','course','title','description','video','remarks',]

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Student
        fields = ['id','first_name','last_name', 'rollno','email', 'password', 'department', 'mobile_no', 'enrollment_no','featured_img','division',]

class StudentCourseEnrollSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.StudentCourseEnrollment
        fields = ['id','course', 'student','enrolled_time',]
    def __int__(self,*args,**kwargs):
            super(StudentCourseEnrollSerializer,self).__init__(*args,**kwargs)
            request=self.context.get('request')
            self.Meta.depth=0
            if request and request.method=='GET':
                self.Meta.depth=2

class StudentCourseEnrollSerializer1(serializers.ModelSerializer):
    class Meta:
        model = models.StudentCourseEnrollment
        fields = ['id','course', 'student','enrolled_time',]
        depth=2
   

class CourseRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CourseRating
        fields = ['id','course', 'student','rating','review','review_time',]
    def __int__(self,*args,**kwargs):
            super(CourseRatingSerializer,self).__init__(*args,**kwargs)
            request=self.context.get('request')
            self.Meta.depth=0
            if request and request.method=='GET':
                self.Meta.depth=1

class TeacherDashboardSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Teacher
        fields=['total_teacher_courses','total_teacher_students','total_teacher_chapters']

class StudentDashboardSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Student
        fields=['total_enroll_courses','favorite_course','complete_assignments','pending_assignments']

class StudentFavoriteCourseSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.StudentFavoriteCourse
        fields=['id','course','student','status']
    def __int__(self,*args,**kwargs):
            super(StudentFavoriteCourseSerializer,self).__init__(*args,**kwargs)
            request=self.context.get('request')
            self.Meta.depth=0
            if request and request.method=='GET':
                self.Meta.depth=1

class StudentFavoriteCourseSerializerfetch(serializers.ModelSerializer):
    class Meta:
        model=models.StudentFavoriteCourse
        fields=['id','course','student','status']
        depth=2


class StudentAssignmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.StudentAssignment
        fields = ['id','teacher','student','title','detail','student_status','add_time',]
    def __int__(self,*args,**kwargs):
            super(StudentAssignmentSerializer,self).__init__(*args,**kwargs)
            request=self.context.get('request')
            self.Meta.depth=0
            if request and request.method=='GET':
                self.Meta.depth=2


                
class StudentAssignmentSerializerfetch(serializers.ModelSerializer):
    class Meta:
        model = models.StudentAssignment
        fields = ['id','teacher','student','title','detail','student_status','add_time',]
        depth=2

class TeacherStudentchatSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.TeacherStudentchat
        fields = ['id','teacher','student','msg_text','msg_from','msg_time',]
    def to_representation(self, instance):
         representation = super(TeacherStudentchatSerializer, self).to_representation(instance)
         representation['msg_time'] = instance.msg_time.strftime("%Y-%m-%d %H:%M")
         return representation


class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Notification1
        fields = ['id', 'teacher', 'student', 'notif_subject', 'notif_for','notif_created_time', 'notifread_status',]

class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Quiz
        fields = ['id', 'teacher','title','detail','assign_status','add_time',]
        
    def __int__(self,*args,**kwargs):
            super(QuizSerializer,self).__init__(*args,**kwargs)
            request=self.context.get('request')
            self.Meta.depth=0
            if request and request.method=='GET':
                self.Meta.depth=2



class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.QuizQuestions
        fields = ['id', 'quiz','questions','ans1','ans2','ans3','ans4','right_ans']
        depth=2
   



class AssignQuizCourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CourseQuiz
        fields = ['id','teacher','course', 'quiz','add_time',]
    def __int__(self,*args,**kwargs):
            super(AssignQuizCourseSerializer,self).__init__(*args,**kwargs)
            request=self.context.get('request')
            self.Meta.depth=0
            if request and request.method=='GET':
                self.Meta.depth=2


class CourseQuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CourseQuiz
        fields = ['id','teacher','course', 'quiz','add_time',]
        depth=2
class AttempQuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.AttempQuiz
        fields = ['id','student','question','add_time',]
    def __int__(self,*args,**kwargs):
            super(AssignQuizCourseSerializer,self).__init__(*args,**kwargs)
            request=self.context.get('request')
            self.Meta.depth=0
            if request and request.method=='GET':
                self.Meta.depth=2
class StudyMaterialSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.StudyMaterial
        fields = ['id','course','title','description','upload','remarks',]
    def __int__(self,*args,**kwargs):
            super(StudyMaterialSerializer,self).__init__(*args,**kwargs)
            request=self.context.get('request')
            self.Meta.depth=0
            if request and request.method=='GET':
                self.Meta.depth=1