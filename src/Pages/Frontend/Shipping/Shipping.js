import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Breadcrumb from '../../Shared/Breadcrumb/Breadcrumb';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Shipping = () => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [product, setProduct] = useState({});
    const { user } = useAuth();

    // load single product data
    useEffect(() => {
        axios.get(`http://localhost:5000/products/${id}`)
            .then(function (res) {
                setProduct(res.data);
            })
            .catch(function (error) {

            });
        setIsLoading(false);
    }, [setProduct]);


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        data.product_id = id;
        data.product_name = product.name;
        data.product_price = product.price;
        data.product_image = product.image;
        data.product_mileage = product.mileage;
        data.product_transmission = product.transmission;
        data.product_make = product.make;
        data.product_description = product.description;
        data.status = 'pending';
        data.created_at = new Date();
        axios.post(`http://localhost:5000/products/order`, data)
            .then(function (res) {
                if (res.data.insertedId) {
                    toast.success(`Order Successfully Completed`);
                    e.target.reset();
                }
            })
            .catch(function (error) {
                toast.error(error);
            });
    }

    return (
        <>
            <ToastContainer />
            <Breadcrumb title={product.name}></Breadcrumb>
            {/* inventory-list-area */}
            <section className="inventory-details-area gray-lite-bg pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="inventory-features mb-30">
                                <div className="inv-details-title d-flex justify-content-between">
                                    <h5>{product.name}</h5>
                                    <h5>${product.price}</h5>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 col-sm-4">
                                        <div className="inventory-features-item">
                                            <h6>Body Type: </h6>
                                            <span>{product.body_type}</span>
                                        </div>
                                        <div className="inventory-features-item">
                                            <h6>Make: </h6>
                                            <span>{product.make}</span>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-4">
                                        <div className="inventory-features-item">
                                            <h6>Transmission: </h6>
                                            <span>{product.transmission}</span>
                                        </div>
                                        <div className="inventory-features-item">
                                            <h6>Year: </h6>
                                            <span>{product.year}</span>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-4">
                                        <div className="inventory-features-item">
                                            <h6>Condition: </h6>
                                            <span>{product.condition}</span>
                                        </div>
                                        <div className="inventory-features-item">
                                            <h6>Fuel Type: </h6>
                                            <span>{product.fuel_type}</span>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-4">
                                        <div className="inventory-features-item">
                                            <h6>Mileage: </h6>
                                            <span>{product.mileage}</span>
                                        </div>
                                        <div className="inventory-features-item">
                                            <h6>Doors: </h6>
                                            <span>{product.doors}-door</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="inventory-details-description mb-30">
                                <div className="inv-details-title">
                                    <h5>Description</h5>
                                </div>
                                <div className="inv-details-img">
                                    <div className="row">
                                        <div className="col-12">
                                            <img className="w-100" src={product.image ?? ''} alt={product.name} title={product.name} />
                                        </div>
                                    </div>
                                </div>
                                <p>{product.description}</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <aside className="inventory-sidebar">
                                <div className="widget inventory-widget">
                                    <div className="inv-widget-title mb-25">
                                        <h5 className="title">Shipping Informations</h5>
                                    </div>
                                    <form onSubmit={handleSubmit(onSubmit)} className="sidebar-find-car">
                                        <div className="form-grp">
                                            <i className="fas fa-user"></i>
                                            <input type="text" defaultValue={user?.displayName} placeholder="Name" {...register("name", { required: true })} />
                                            <div className="help-block text-danger">
                                                {errors.name && <span>This field is required</span>}
                                            </div>
                                        </div>
                                        <div className="form-grp">
                                            <i className="fas fa-envelope"></i>
                                            <input type="text" defaultValue={user?.email} placeholder="Email" {...register("email", { required: true })} />
                                            <div className="help-block text-danger">
                                                {errors.email && <span>This field is required</span>}
                                            </div>
                                        </div>
                                        <div className="form-grp">
                                            <i className="fas fa-phone"></i>
                                            <input type="text" placeholder="Phone" {...register("phone", { required: true })} />
                                            <div className="help-block text-danger">
                                                {errors.phone && <span>This field is required</span>}
                                            </div>
                                        </div>
                                        <div className="form-grp">
                                            <i className="fas fa-user"></i>
                                            <input type="text" placeholder="Address" {...register("address", { required: true })} />
                                            <div className="help-block text-danger">
                                                {errors.address && <span>This field is required</span>}
                                            </div>
                                        </div>
                                        <div className="form-grp">
                                            <i className="fas fa-cart-plus"></i>
                                            <input type="text" placeholder="Quantity" {...register("quantity", { required: true })} />
                                            <div className="help-block text-danger">
                                                {errors.quantity && <span>This field is required</span>}
                                            </div>
                                        </div>
                                        <div className="form-grp">
                                            <textarea cols="20" className="form-control" rows="5" placeholder="Remark"  {...register("remark")}></textarea>
                                            <div className="help-block text-danger">
                                                {errors.remark && <span>This field is required</span>}
                                            </div>
                                        </div>
                                        <button className="btn primary-bg">Order New</button>
                                    </form>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
            {/* inventory-list-area-end */}
        </>
    );
};

export default Shipping;