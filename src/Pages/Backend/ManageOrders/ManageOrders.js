import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Breadcrumb from '../../Shared/Breadcrumb/Breadcrumb';
import AdminSidebar from '../Sidebar/AdminSidebar';
import { Link } from 'react-router-dom';

const ManageOrders = () => {
    const { user } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [orders, setOrders] = useState([]);

    // load products data
    useEffect(() => {
        axios.get(`https://powerful-brushlands-43185.herokuapp.com/my-orders`)
            .then(function (res) {
                setOrders(res.data);
            })
            .catch(function (error) {
                toast.error(error);
            });
        setIsLoading(false);
    }, [setOrders]);

    // Change Status
    const handleStatus = (id, status) => {
        const proceed = window.confirm('Are you sure, you want to change status?');
        if (proceed) {
            const data = { status: status === 'pending' ? 'complete' : 'pending' };
            axios.put(`https://powerful-brushlands-43185.herokuapp.com/my-orders/${id}`, data)
                .then(res => {
                    toast.success(`Status Updated Successfully`);
                })
                .catch(error => {
                    toast.error(error);
                });
        }
    }

    // Delete Orders
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            axios.delete(`https://powerful-brushlands-43185.herokuapp.com/my-orders/${id}`)
                .then(function (response) {
                    if (response.data.deletedCount > 0) {
                        toast.success(`Data Deleted Successfully`);
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                    }
                })
                .catch(function (error) {
                    toast.error(error);
                });
        }
    }
    return (
        <>
            <ToastContainer />
            <Breadcrumb title="Manage All Orders"></Breadcrumb>
            {/* author-profile-area */}
            <div className="author-profile-area gray-lite-bg pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <AdminSidebar></AdminSidebar>
                        <div className="col-xl-8 col-lg-7 col-md-9">
                            <div className="inventory-meta-wrap mb-35">
                                <div className="inventory-top-meta">
                                    <ul>
                                        <li className="find">Total Orders : <span>{orders.length}</span></li>
                                        <li>
                                            <form action="#" className="inventory-short-meta">
                                                <label htmlFor="sort_by">Sort by :</label>
                                                <select id="sort_by" className="form-control">
                                                    <option value="">Newest</option>
                                                    <option value="">Oldest</option>
                                                    <option value="">Price High to Low</option>
                                                    <option value="">Price Low to High</option>
                                                    <option value="">Most Popular</option>
                                                </select>
                                            </form>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {
                                orders.map(order => <div key={order._id} className="inventory-list-item">
                                    <div className="inventory-list-thumb">
                                        <img style={{ maxHeight: '250px' }} className="w-100" src={order.product_image ?? 'https://i.ibb.co/Wy1R6rV/no-photo.jpg'} alt={order.product_name} title={order.product_name} />
                                    </div>
                                    <div className="inventory-list-content">
                                        <div className="inv-content-top">
                                            <ul>
                                                <li className="option">
                                                    {
                                                        order.status === 'pending' ? <a className="black new" href="#" onClick={() => handleStatus(order._id, order.status)}>Pending</a> : <a className="new primary-bg" href="#" onClick={() => handleStatus(order._id, order.status)}>Complete</a>
                                                    }

                                                </li>
                                                <li className="price">${order.product_price}</li>
                                            </ul>
                                        </div>
                                        <h4>
                                            <Link to={`/shipping/${order.product_id}`}>{order.product_name}</Link>
                                        </h4>
                                        <p className="location">
                                            {order.product_description?.slice(0, 100)}
                                        </p>
                                        <div className="inv-item-meta">
                                            <ul>
                                                <li className="call"><a href="#" className="primary-bg text-white" onClick={() => handleDelete(order._id)}><i className="fas fa-trash"></i>Delete</a></li>
                                                <li>Quantity : {order?.quantity}</li>
                                                <li>Name : {order?.name}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* author-profile-area-end */}
        </>
    );
};

export default ManageOrders;