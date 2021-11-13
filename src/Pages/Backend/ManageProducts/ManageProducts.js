import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Breadcrumb from '../../Shared/Breadcrumb/Breadcrumb';
import AdminSidebar from '../Sidebar/AdminSidebar';
import { Link } from 'react-router-dom';

const ManageProducts = () => {
    const { user } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([]);

    // load products data
    useEffect(() => {
        axios.get(`https://powerful-brushlands-43185.herokuapp.com/products`)
            .then(function (res) {
                setProducts(res.data);
            })
            .catch(function (error) {
                toast.error(error);
            });
        setIsLoading(false);
    }, [setProducts]);

    // Delete Product
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            axios.delete(`https://powerful-brushlands-43185.herokuapp.com/products/${id}`)
                .then(function (response) {
                    if (response.data.deletedCount > 0) {
                        toast.success(`Data Deleted Successfully`);
                        const remainingProducts = products.filter(product => product._id !== id);
                        setProducts(remainingProducts);
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
            <Breadcrumb title="Manage All Products"></Breadcrumb>
            {/* author-profile-area */}
            <div className="author-profile-area gray-lite-bg pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <AdminSidebar></AdminSidebar>
                        <div className="col-xl-8 col-lg-7 col-md-9">
                            <div className="inventory-meta-wrap mb-35">
                                <div className="inventory-top-meta">
                                    <ul>
                                        <li className="find">Total Products : <span>{products.length}</span></li>
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
                                products.map(product => <div key={product._id} className="inventory-list-item">
                                    <div className="inventory-list-thumb">
                                        <img style={{ maxHeight: '250px' }} className="w-100" src={product.image ?? 'https://i.ibb.co/Wy1R6rV/no-photo.jpg'} alt={product.name} title={product.name} />
                                    </div>
                                    <div className="inventory-list-content">
                                        <div className="inv-content-top">
                                            <ul>
                                                <li className="option">
                                                    {
                                                        product.status === 'pending' ? <a className="black new" href="#">Pending</a> : <a className="new primary-bg" href="#">Complete</a>
                                                    }

                                                </li>
                                                <li className="price">${product.price}</li>
                                            </ul>
                                        </div>
                                        <h4>
                                            <Link to={`/shipping/${product._id}`}>{product.name}</Link>
                                        </h4>
                                        <p className="location">
                                            {product.description?.slice(0, 100)}
                                        </p>
                                        <div className="inv-item-meta">
                                            <ul>
                                                <li className="call"><a href="#" className="primary-bg text-white" onClick={() => handleDelete(product._id)}><i className="fas fa-trash"></i>Delete</a></li>
                                                <li><i className="fas fa-cog"></i> {product.transmission}</li>
                                                <li><i className="fas fa-gas-pump"></i> {product.fuel_type}</li>
                                                <li><i className="fas fa-subway"></i> {product.mileage}</li>
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

export default ManageProducts;