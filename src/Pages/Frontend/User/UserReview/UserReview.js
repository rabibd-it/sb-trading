import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Breadcrumb from '../../../Shared/Breadcrumb/Breadcrumb';
import Sidebar from '../Sidebar/Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../../../../hooks/useAuth';

const UserReview = () => {
    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    // Customer Review
    const onSubmit = (data, e) => {

        const reviewData = {
            name: user.displayName ?? '',
            image: user.photoURL ? user.photoURL : 'https://i.ibb.co/Wy1R6rV/no-photo.jpg',
            rating: parseInt(data.rating),
            status: 'pending',
            description: data.description,
            created_at: new Date().toDateString(),
        };

        axios.post(`https://powerful-brushlands-43185.herokuapp.com/reviews`, reviewData)
            .then(function (res) {
                if (res.data.insertedId) {
                    toast.success(`Review Inserted Successfully`);
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
            <Breadcrumb title="Reviews"></Breadcrumb>
            {/* author-profile-area */}
            <div className="author-profile-area gray-lite-bg pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <Sidebar></Sidebar>
                        <div className="col-xl-8 col-lg-7 col-md-9">
                            <div className="inventory-list-item h-100 d-flex align-items-center justify-content-center">
                                <div className="login-wrap w-75 py-5">
                                    <h3 className="widget-title">Review From</h3>
                                    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                                        <div className="form-grp">
                                            <label htmlFor="rating">Rating <span>*</span></label>
                                            <input type="number" className="form-control" id="rating" placeholder="Rating" {...register("rating", { required: true, min: 1, max: 5 })} />
                                            {errors.rating && <span className="text-danger w-100">This field is required</span>}
                                        </div>
                                        <div className="form-grp">
                                            <label htmlFor="description">Message <span>*</span></label>
                                            <textarea rows="5" className="form-control" id="description" placeholder="Message" {...register("description", { required: true })} />
                                            {errors.description && <span className="text-danger w-100">This field is required</span>}
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

export default UserReview;