import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Breadcrumb from '../../Shared/Breadcrumb/Breadcrumb';
import AdminSidebar from '../Sidebar/AdminSidebar';

const AdminDashboard = () => {

    const { user, admin } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [orders, setOrders] = useState([]);
    const [reviews, setReviews] = useState([]);

    // load users data
    useEffect(() => {
        axios.get(`https://powerful-brushlands-43185.herokuapp.com/users`)
            .then(function (res) {
                setUsers(res.data);
            })
            .catch(function (error) {

            });
        setIsLoading(false);
    }, [setUsers]);

    // load products data
    useEffect(() => {
        axios.get(`https://powerful-brushlands-43185.herokuapp.com/my-orders`)
            .then(function (res) {
                setOrders(res.data);
            })
            .catch(function (error) {

            });
        setIsLoading(false);
    }, [setOrders]);

    // load reviews data
    useEffect(() => {
        axios.get(`https://powerful-brushlands-43185.herokuapp.com/reviews`)
            .then(function (res) {
                setReviews(res.data);
            })
            .catch(function (error) {

            });
        setIsLoading(false);
    }, [setReviews]);

    return (
        <>
            <Breadcrumb title="Dashboard"></Breadcrumb>
            {/* author-profile-area */}
            <div className="author-profile-area gray-lite-bg pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <AdminSidebar></AdminSidebar>
                        <div className="col-xl-8 col-lg-7 col-md-9">
                            <div className="row gap-4">
                                <div class="col card text-white bg-dark mb-3 h-100">
                                    <div class="card-header">Total Users</div>
                                    <div class="card-body">
                                        <h5 class="card-title text-white">{users.length}</h5>
                                    </div>
                                </div>
                                <div class="col card text-white bg-dark mb-3 h-100">
                                    <div class="card-header">Total Orders</div>
                                    <div class="card-body">
                                        <h5 class="card-title text-white">{orders.length}</h5>
                                    </div>
                                </div>
                                <div class="col card text-white bg-dark mb-3 h-100">
                                    <div class="card-header">Total Reviews</div>
                                    <div class="card-body">
                                        <h5 class="card-title text-white">{reviews.length}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* author-profile-area-end */}
        </>
    );
};

export default AdminDashboard;