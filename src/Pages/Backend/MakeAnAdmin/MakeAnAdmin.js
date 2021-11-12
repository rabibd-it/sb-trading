import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Breadcrumb from '../../Shared/Breadcrumb/Breadcrumb';
import AdminSidebar from '../Sidebar/AdminSidebar';

const MakeAnAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    // Create Product
    const onSubmit = (data, e) => {
        axios.put(`http://localhost:5000/users/admin`, data)
            .then(function (res) {
                if (res.data.message) {
                    toast.error(res.data.message);
                } else {
                    toast.success('Successfully added an admin');
                    e.target.reset();
                }
            })
            .catch(function (error) {
                toast.error(error);
            });
    };
    return (
        <>
            <ToastContainer />
            <Breadcrumb title="Make an Admin"></Breadcrumb>
            {/* author-profile-area */}
            <div className="author-profile-area gray-lite-bg pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <AdminSidebar></AdminSidebar>
                        <div className="col-xl-8 col-lg-7 col-md-9">
                            <div className="inventory-list-item h-100 d-flex align-items-center justify-content-center">
                                <div className="login-wrap w-75 py-5">
                                    <h3 className="widget-title">Make an Admin</h3>
                                    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                                        <div className="form-grp">
                                            <label htmlFor="email">Email <span>*</span></label>
                                            <input type="text" className="form-control" id="email" placeholder="Email" {...register("email", { required: true })} />
                                            {errors.name && <span className="text-danger w-100">This field is required</span>}
                                        </div>
                                        <button className="btn primary-bg w-100 text-center">Submit</button>
                                    </form>
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

export default MakeAnAdmin;