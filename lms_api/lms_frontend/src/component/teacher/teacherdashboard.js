import React, { useState, useEffect } from 'react';
import Teachersidebar from './teachersidebar';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import Swal from 'sweetalert2';

const baseUrl = 'http://127.0.0.1:8000/api';

function TeacherDashboard() {
    const teacherId = localStorage.getItem('teacherId');

    useEffect(() => {
        document.title = 'Teacher Dashboard';
    }, []);

    const [dashboardData, setDashboardData] = useState({ total_teacher_courses: 0, total_teacher_students: 0, total_teacher_chapters: 0 });

    useEffect(() => {
        try {
            axios.get(baseUrl + '/teacher/dashboard/' + teacherId).then((response) => {
                setDashboardData(response.data);
            });
        } catch (error) {
            console.error(error);
            setDashboardData({ status: 'error' });
        }
    }, []);

    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <Teachersidebar />
                </aside>
                <section className="col-md-9">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card border-primary">
                                <h5 className="card-header bg-primary text-white">Total Courses</h5>
                                <div className="card-body">
                                    <h3>
                                        <Link to="/teacher-courses">{dashboardData.total_teacher_courses}</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card border-success">
                                <h5 className="card-header bg-success text-white">Total Students</h5>
                                <div className="card-body">
                                    <h3>
                                        <Link to="/my-users">{dashboardData.total_teacher_students}</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card border-info">
                                <h5 className="card-header bg-info text-white">Total Chapters</h5>
                                <div className="card-body">
                                    <h3>
                                        <Link to="/teacher-courses">{dashboardData.total_teacher_chapters}</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default TeacherDashboard;
