from django.db import models
from django.contrib import admin
from django.core import serializers
from django.core.mail import send_mail

# teacher
class Teacher(models.Model):
    first_name=models.CharField(max_length=100)
    last_name=models.CharField(max_length=100)
    detail=models.TextField(null=True)
    email=models.CharField(max_length=100)
    password=models.CharField(max_length=100)
    featured_img=models.ImageField(upload_to='teacher_imgs/',null=True)
    qulification=models.CharField(max_length=200)
    mobile_no=models.CharField(max_length=20)
    address=models.TextField()
    # verify_status=models.BooleanField(default=False)
    # otp_digit=models.CharField(max_length=10,null=True)

    # def save(self):
    #     if self.pk is None:
    #         send_mail('Verify Account',
    #                   'Please Verify your account',
    #             'diptishgohane04@gmail.com',
    #             [self.email],
    #             fail_silently=False,
    #             html_message=f'<p>Your OTP is </p><p>{self.otp_digit}</p>'

    #         )

    #     return super().save()



    class Meta:
        verbose_name_plural="1. Teachers"

    def total_teacher_courses(self):
     total_courses = Course.objects.filter(teacher_id=self).count()
     return total_courses


    def  total_teacher_students(self):
        total_students=StudentCourseEnrollment.objects.filter(course__teacher=self).count() 
        return total_students 
    def  total_teacher_chapters(self):
        total_chapters=Chapter.objects.filter(course__teacher=self).count() 
        return total_chapters 


# coursecat
class CourseCategory(models.Model):
    title=models.CharField(max_length=150)
    discription=models.TextField()
    class Meta:
        verbose_name_plural="2. Course Categories"

    def __str__(self):
        return self.title    

    
# course
class Course(models.Model):
    category=models.ForeignKey(CourseCategory,on_delete=models.CASCADE)
    teacher=models.ForeignKey(Teacher,on_delete=models.CASCADE,related_name='teacher_courses')
    title=models.CharField(max_length=150)
    description=models.TextField()
    featured_img=models.ImageField(upload_to='course_imgs/',null=True)
    techs=models.TextField(null=True)



    class Meta:
        verbose_name_plural="3. Courses "

    def related_vidoes(self):   
        related_vidoes=Course.objects.filter(techs__icontains=self.techs)
        return serializers.serialize('json',related_vidoes)
    def total_enrolled_students(self):
        total_enrolled_students=StudentCourseEnrollment.objects.filter(course=self).count()
        return total_enrolled_students
    
    def course_rating(self):
        course_rating=CourseRating.objects.filter(course=self).aggregate(avg_rating=models.Avg('rating'))
        return course_rating['avg_rating']
    
   

    def __str__(self):
        return self.title    
    

# student
class Student(models.Model):
    first_name=models.CharField(max_length=100,null=True)
    last_name=models.CharField(max_length=100,null=True)
    rollno=models.TextField(null=True)
    email=models.CharField(max_length=100,null=True)
    password=models.CharField(max_length=100,null=True)
    featured_img=models.ImageField(upload_to='teacher_imgs/',null=True)
    department=models.CharField(max_length=200,null=True)
    mobile_no=models.CharField(max_length=20,null=True)
    enrollment_no=models.TextField(null=True)
    division=models.TextField(null=True)
    # verify_status=models.BooleanField(default=False)
    # otp_digit=models.CharField(max_length=10,null=True)

    class Meta:
        verbose_name_plural="4. Students"
    def __str__(self):
        return self.first_name  
    def total_enroll_courses(self):
         enroll_courses = StudentCourseEnrollment.objects.filter(student=self).count()
         return enroll_courses


    def  favorite_course(self):
        total_students=StudentFavoriteCourse.objects.filter(student=self).count() 
        return total_students 
    def  complete_assignments(self):
        com_assignment=StudentAssignment.objects.filter(student=self,student_status=True).count() 
        return com_assignment 
    def  pending_assignments(self):
        pen_assignment=StudentAssignment.objects.filter(student=self,student_status=False).count() 
        return pen_assignment 
  


# chapter
class Chapter(models.Model):
    course=models.ForeignKey(Course,on_delete=models.CASCADE,related_name='course_chapters')
    title=models.CharField(max_length=150)
    description=models.TextField()
    video=models.FileField(upload_to='chapter_videos/',null=True)
    remarks=models.TextField(null=True)
    class Meta:
        verbose_name_plural="5. Chapters"


class StudentCourseEnrollment(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='enrolled_courses')
    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name='enrolled_student')
    enrolled_time = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = "6. Enrolled Courses"

    def __str__(self):
        return f"{self.student} enrolled in {self.course}"

class CourseRating(models.Model):
     course = models.ForeignKey(Course, on_delete=models.CASCADE)
     student = models.ForeignKey(Student, on_delete=models.CASCADE)
     rating=models.PositiveBigIntegerField(default=0)
     review=models.TextField(null=True)
     review_time = models.DateTimeField(auto_now_add=True)
     def __str__(self):
        return f"{self.course} - {self.student} {self.rating}"

     class Meta:
        verbose_name_plural = "7. Course Rating"

class StudentFavoriteCourse(models.Model):
    course=models.ForeignKey(Course,on_delete=models.CASCADE)    
    student=models.ForeignKey(Student,on_delete=models.CASCADE)  
    status=models.BooleanField(default=False)     
    class Meta:
        verbose_name_plural = "8. Student Favorite Courses"   
    def __str__(self):
        return f"{self.course} - {self.student} "  
    

class StudentAssignment(models.Model):
    teacher=models.ForeignKey(Teacher,on_delete=models.CASCADE)  
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    title=models.CharField(max_length=200) 
    detail=models.TextField(null=True)
    student_status=models.BooleanField(default=False,null=True)
    add_time=models.DateTimeField(auto_now_add=True)     
    class Meta:
        verbose_name_plural = "9. Student Assignments"   
    def __str__(self):
        return f"{self.title}"  


class Notification(models.Model) :
    teacher=models.ForeignKey(Teacher,on_delete=models.CASCADE,null=True)
    student=models.ForeignKey(Student,on_delete=models.CASCADE,null=True)
    notif_subject=models.CharField(max_length=200,null=True) 
    notif_for=models.CharField(max_length=200)
    notif_created_time=models.DateTimeField(auto_now_add=True)
    notifread_status=models.BooleanField(default=False,null=True)
    class Meta:
        verbose_name_plural = "10. Notifications "  
class Notification1(models.Model) :
    teacher=models.ForeignKey(Teacher,on_delete=models.CASCADE)
    student=models.ForeignKey(Student,on_delete=models.CASCADE)
    notif_subject=models.CharField(max_length=200,null=True) 
    notif_for=models.CharField(max_length=200)
    notif_created_time=models.DateTimeField(auto_now_add=True)
    notifread_status=models.BooleanField(default=False,null=True)
    class Meta:
        verbose_name_plural = "10. Notifications " 

class Quiz(models.Model) :
    teacher=models.ForeignKey(Teacher,on_delete=models.CASCADE,null=True)
    title=models.CharField(max_length=200) 
    detail=models.TextField()
    add_time=models.DateTimeField(auto_now_add=True)

    def assign_status(self):
        return CourseQuiz.objects.filter(quiz=self).count()
   
   
    class Meta:
        verbose_name_plural = "11. Quiz " 


class QuizQuestions(models.Model) :
    quiz=models.ForeignKey(Quiz,on_delete=models.CASCADE) 
    questions=models.CharField(max_length=200)
    ans1=models.CharField(max_length=200)
    ans2=models.CharField(max_length=200)
    ans3=models.CharField(max_length=200)
    ans4=models.CharField(max_length=200)
    right_ans=models.CharField(max_length=200)

    class Meta:
        verbose_name_plural = "12. Quiz Question" 
 
class CourseQuiz(models.Model) :
    teacher=models.ForeignKey(Teacher,on_delete=models.CASCADE,null=True) 
    course=models.ForeignKey(Course,on_delete=models.CASCADE) 
    quiz=models.ForeignKey(Quiz,on_delete=models.CASCADE) 
    add_time=models.DateTimeField(auto_now_add=True)
   
    class Meta:
        verbose_name_plural = "13. Course Quiz"


class AttempQuiz(models.Model) :
    student=models.ForeignKey(Student,on_delete=models.CASCADE,null=True) 
    question=models.ForeignKey(QuizQuestions,on_delete=models.CASCADE,null=True) 
    quiz=models.ForeignKey(Quiz,on_delete=models.CASCADE) 
    right_ans=models.CharField(max_length=200,null=True)
    add_time=models.DateTimeField(auto_now_add=True)
   
    class Meta:
        verbose_name_plural = "14. Attempted Questions" 
 
 
 

class StudyMaterial(models.Model):
    course=models.ForeignKey(Course,on_delete=models.CASCADE)
    title=models.CharField(max_length=150)
    description=models.TextField()
    upload=models.FileField(upload_to='study_materials/',null=True)
    remarks=models.TextField(null=True)
    class Meta:
        verbose_name_plural="15. Course Study Material"

class TeacherStudentchat(models.Model):
    teacher=models.ForeignKey(Teacher,on_delete=models.CASCADE)   
    student=models.ForeignKey(Student,on_delete=models.CASCADE) 
    msg_text=models.TextField()
    msg_from=models.CharField(max_length=100)
    msg_time=models.DateTimeField(auto_now_add=True)    
    class Meta:
        verbose_name_plural="16. Teacher Student Messages"        