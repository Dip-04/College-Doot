
import React, { useState, useEffect } from 'react';
import SideBar from './sidebar';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";

const baseUrl = 'http://127.0.0.1:8000/api';

function Dashboard() {
    const studentId = localStorage.getItem('studentId');

    useEffect(() => {
        document.title = '  Student Dashboard';
    }, []);

    const [udashboardData, setuDashboardData] = useState({ total_enroll_courses: 0, favorite_course: 0, complete_assignments: 0 ,pending_assignments: 0 ,});

    useEffect(() => {
        try {
            axios.get(baseUrl + '/student/dashboard/' + studentId).then((response) => {
                setuDashboardData(response.data);
            });
        } catch (error) {
            console.error(error);
            setuDashboardData({ status: 'error' });
        }
    }, []);
console.log(udashboardData)
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <SideBar />
                </aside>
                <section className="col-md-9">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card border-primary">
                                <h5 className="card-header bg-primary text-white">Enrolled Courses</h5>
                                <div className="card-body">
                                    <h3>
                                        <Link to="/my-courses">{udashboardData.total_enroll_courses}</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card border-success">
                                <h5 className="card-header bg-success text-white">Favorite Courses</h5>
                                <div className="card-body">
                                    <h3>
                                        <Link to="/favorite-courses">{udashboardData.favorite_course}</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card border-info">
                                <h5 className="card-header bg-info text-white">Complete Assignments</h5>
                                <div className="card-body">
                                    <h3>
                                        <Link to="/my-assignments/">{udashboardData.complete_assignments}</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card border-info">
                                <h5 className="card-header bg-warning text-white">Pending Assignments</h5>
                                <div className="card-body">
                                    <h3>
                                        <Link to="/my-assignments/">{udashboardData.pending_assignments}</Link>
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

export default Dashboard;
