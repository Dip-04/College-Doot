from django.urls import path
from . import views
urlpatterns=[
    path('teacher/',views.TeacherList.as_view()),
        path('teacher/dashboard/<int:pk>/',views.TeacherDashboard.as_view()),
        path('student/dashboard/<int:pk>/',views.StudentDashboard.as_view()),
    path('teachers/',views.TeacherList.as_view()),

    path('teacher/<int:pk>/',views.TeacherDetail.as_view()),
    path('teacher-login',views.TeacherLogin),
        path('category/',views.CategoryList.as_view()),

        path('course/',views.CourseList.as_view()),
        path('add-course/',views.CourseListADD.as_view()),

                path('course/<int:pk>',views.CourseDetailView.as_view()),

path('teacher-course/<int:teacher_id>/', views.TeacherCourseList.as_view()),
        path('chapter/',views.ChapterList.as_view()),
        path('course-chapter/<int:course_id>',views.CourseChapterList.as_view()),

        path('chapter/<int:pk>',views.ChapterDetailView.as_view()),

    path('teacher-course-detail/<int:pk>/', views.TeacherDetailView.as_view()),
    path('student/',views.StudentList.as_view()),
    path('student-login/',views.StudentLogin),
    path('student-enroll-course/',views.StudentEnrollCourseList.as_view()),
    path('student/<int:pk>/',views.StudentDetail.as_view()),
    path('fetch-enroll-status/<int:student_id>/<int:course_id>/',views.fetch_enroll_status),
        path('fetch-all-enrolled-students/<int:teacher_id>/',views.EnrolledStudentList1.as_view()),

    path('fetch-enrolled-students/<int:course_id>/',views.EnrolledStudentList.as_view()),
        path('course-rating/<int:course_id>',views.CourseRatingList.as_view()),
    path('fetch-rating-status/<int:student_id>/<int:course_id>/',views.fetch_rating_status),
    path('teacher/change-password/<int:teacher_id>/',views.teacherchangepassword),
        path('fetch-enrolled-courses/<int:student_id>/',views.EnrolledStudentList1.as_view()),
        path('student-remove-favorite-courses/<int:course_id>/<int:student_id>/',views.remove_favorite_course),
path('student-add-favorite-courses/', views.StudentFavoriteCourseList.as_view()),
             path('fetch-favorite-status/<int:student_id>/<int:course_id>/',views.fetch_favorite_status),
        path('fetch-favorite-courses/<int:student_id>/',views.StudentFavoriteCourseListfetch.as_view()),
        path('student-assignment/<int:teacher_id>/<int:student_id>/',views.AssignmentList.as_view()),
        path('my-assignments/<int:student_id>/',views.MyAssignmentList.as_view()),
        path('update-assignment/<int:pk>/',views.UpdateAssignment.as_view()),
    path('student/change-password/<int:student_id>/',views.studentchangepassword),
    path('student/fetch-all-notification/<int:student_id>/',views.NotificationList.as_view()),
    path('save-notification/',views.NotificationList.as_view()),
    path('quiz/',views.Quizlist.as_view()),
    path('teacher-quiz/<int:teacher_id>/',views.TeacherQuizlist.as_view()),
    path('teacher-quiz-detail/<int:pk>/', views.TeacherQuizDetail.as_view()),
    path('quiz/<int:pk>/',views.QuizDetailView.as_view()),
    path('quiz-questions/<int:quiz_id>/', views.QuizQuestionlist.as_view()),
    path('questions/<int:pk>/',views.QuestionDetailView.as_view()),
    path('quiz-assign-course/',views.AssignQuizCourseList.as_view()),
    path('fetch-assigned-quiz/<int:course_id>/',views.CourseQuizList.as_view()),
    path('quiz-questions/<int:quiz_id>/<int:limit>/', views.QuizQuestionlist.as_view()),
    path('attemp-quiz/', views.AttemptQuizList.as_view()),
    path('quiz-questions/<int:quiz_id>/next-question/<int:question_id>/', views.QuizQuestionlist.as_view()),
    path('search-courses/<str:searchString>/', views.CourseList.as_view()),
    path('study-materials/<int:course_id>/', views.StudyMaterialList.as_view()),
    path('study-material/<int:pk>/', views.StudyMaterialDetailView.as_view()),
    path('send-message/<int:teacher_id>/<int:student_id>/', views.save_teacher_student_msg),
        path('get-message/<int:teacher_id>/<int:student_id>/', views.MessageList.as_view()),
        path('send-group-message/<int:teacher_id>/', views.save_teacher_student_group_msg),
    path('send-message-to-teacher/<int:student_id>/<int:teacher_id>/', views.save_student_teacher_msg),


         path('fetch-all-enrolled-teacher/<int:student_id>/',views.EnrolledTeacherList.as_view()),
]
