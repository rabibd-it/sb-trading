import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Breadcrumb from '../../Shared/Breadcrumb/Breadcrumb';
import AdminSidebar from '../Sidebar/AdminSidebar';

const CreateProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    // Create Product
    const onSubmit = (data, e) => {
        axios.post(`https://powerful-brushlands-43185.herokuapp.com/products`, data)
            .then(function (res) {
                if (res.data.insertedId) {
                    toast.success(`Product Inserted Successfully`);
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
            <Breadcrumb title="Add a Product"></Breadcrumb>
            {/* author-profile-area */}
            <div className="author-profile-area gray-lite-bg pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <AdminSidebar></AdminSidebar>
                        <div className="col-xl-8 col-lg-7 col-md-9">
                            <div className="inventory-list-item h-100 d-flex align-items-center justify-content-center">
                                <div className="login-wrap w-100 py-5">
                                    <h3 className="widget-title">Add A Product</h3>
                                    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-grp">
                                                    <label htmlFor="name">Name <span>*</span></label>
                                                    <input type="text" className="form-control" id="name" placeholder="Name" {...register("name", { required: true })} />
                                                    {errors.name && <span className="text-danger w-100">This field is required</span>}
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-grp">
                                                    <label htmlFor="image">Image <span>*</span></label>
                                                    <input type="text" className="form-control" id="image" placeholder="Image" {...register("image", { required: true })} />
                                                    {errors.image && <span className="text-danger w-100">This field is required</span>}
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-grp">
                                                    <label htmlFor="price">Price <span>*</span></label>
                                                    <input type="number" className="form-control" id="price" placeholder="Price" {...register("price", { required: true, min: 1 })} />
                                                    {errors.price && <span className="text-danger w-100">This field is required</span>}
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-grp">
                                                    <label htmlFor="rating">Rating <span>*</span></label>
                                                    <input type="number" className="form-control" id="rating" placeholder="Rating" {...register("rating", { required: true, min: 1, max: 5 })} />
                                                    {errors.rating && <span className="text-danger w-100">This field is required</span>}
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-grp">
                                                    <label htmlFor="mileage">Mileage <span>*</span></label>
                                                    <input type="number" className="form-control" id="mileage" placeholder="Mileage" {...register("mileage", { required: true, min: 1 })} />
                                                    {errors.mileage && <span className="text-danger w-100">This field is required</span>}
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-grp">
                                                    <label htmlFor="chassis_no">Chassis No <span>*</span></label>
                                                    <input type="text" className="form-control" id="chassis_no" placeholder="Chassis No" {...register("chassis_no")} />
                                                    {errors.chassis_no && <span className="text-danger w-100">This field is required</span>}
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-grp">
                                                    <label htmlFor="body_type">Body Type <span>*</span></label>
                                                    <input type="text" className="form-control" id="body_type" placeholder="Body Type" {...register("body_type", { required: true })} />
                                                    {errors.body_type && <span className="text-danger w-100">This field is required</span>}
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-grp">
                                                    <label htmlFor="transmission">Transmission <span>*</span></label>
                                                    <input type="text" className="form-control" id="transmission" placeholder="Transmission" {...register("transmission", { required: true })} />
                                                    {errors.transmission && <span className="text-danger w-100">This field is required</span>}
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-grp">
                                                    <label htmlFor="condition">Condition <span>*</span></label>
                                                    <input type="text" className="form-control" id="condition" placeholder="Condition" {...register("condition", { required: true })} />
                                                    {errors.condition && <span className="text-danger w-100">This field is required</span>}
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-grp">
                                                    <label htmlFor="make">Make <span>*</span></label>
                                                    <input type="text" className="form-control" id="make" placeholder="Make" {...register("make", { required: true })} />
                                                    {errors.make && <span className="text-danger w-100">This field is required</span>}
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="form-grp">
                                                    <label htmlFor="year">Year <span>*</span></label>
                                                    <input type="number" className="form-control" id="year" placeholder="Year" {...register("year", { required: true })} />
                                                    {errors.year && <span className="text-danger w-100">This field is required</span>}
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="form-grp">
                                                    <label htmlFor="fuel_type">Fuel Type <span>*</span></label>
                                                    <input type="text" className="form-control" id="fuel_type" placeholder="Fuel Type" {...register("fuel_type", { required: true })} />
                                                    {errors.fuel_type && <span className="text-danger w-100">This field is required</span>}
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="form-grp">
                                                    <label htmlFor="doors">Doors <span>*</span></label>
                                                    <input type="number" className="form-control" id="doors" placeholder="Doors" {...register("doors", { required: true, min: 1 })} />
                                                    {errors.doors && <span className="text-danger w-100">This field is required</span>}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-grp">
                                            <label htmlFor="description">Description <span>*</span></label>
                                            <textarea rows="5" className="form-control" id="description" placeholder="Description" {...register("description", { required: true })} />
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

export default CreateProduct;