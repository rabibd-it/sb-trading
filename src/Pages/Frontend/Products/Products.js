import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../Shared/Breadcrumb/Breadcrumb';
import Product from '../Product/Product';

const Products = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([]);
    // load products data
    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(function (res) {
                setProducts(res.data);
            })
            .catch(function (error) {

            });
        setIsLoading(false);
    }, [setProducts]);
    return (
        <>
            <Breadcrumb title="Products"></Breadcrumb>
            <section className="latest-cars-area latest-cars-three gray-lite-bg pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-5 col-lg-6">
                            <div className="section-title text-center mb-35">
                                <span className="sub-title">our Featured Cars</span>
                                <h2 className="title text-uppercase">All Cars</h2>
                                <div className="line">
                                    <img src={'https://i.ibb.co/1XTCsTR/line.png'} alt="line" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="latest-cars-wrapper">
                        <div className="row">
                            {
                                products.map(product => <Product key={product._id} product={product}></Product>)
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Products;