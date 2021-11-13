import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Breadcrumb from '../../Shared/Breadcrumb/Breadcrumb';
import Brand from '../Brand/Brand';

const Brands = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [brands, setBrands] = useState([]);
    // load brands data
    useEffect(() => {
        axios.get('https://powerful-brushlands-43185.herokuapp.com/brands')
            .then(function (res) {
                setBrands(res.data);
            })
            .catch(function (error) {

            });
        setIsLoading(false);
    }, [setBrands]);
    return (
        <>
            <Breadcrumb title="Brands"></Breadcrumb>
            <section className="pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-5 col-lg-6">
                            <div className="section-title text-center mb-35">
                                <span className="sub-title">our Featured Brand</span>
                                <h2 className="title text-uppercase">All Brands</h2>
                                <div className="line">
                                    <img src={'https://i.ibb.co/1XTCsTR/line.png'} alt="line" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="popular-selling-wrap">
                                <div className="row justify-content-center">
                                    {
                                        brands.map(brand => <Brand ew key={brand._id} brand={brand}></Brand>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Brands;