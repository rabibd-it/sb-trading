import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slick from "react-slick";
import about_img_01 from '../../../images/about_img-1.jpg';
import about_img_02 from '../../../images/about_img-2.jpg';
import logo from '../../../images/logo.png';
import Brand from '../Brand/Brand';
import Product from '../Product/Product';
import Review from '../Review/Review';
const Home = () => {
    const reviewSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 8000,
        autoplaySpeed: 500,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [brands, setBrands] = useState([]);

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

    // load reviews data
    useEffect(() => {
        axios.get('http://localhost:5000/reviews')
            .then(function (res) {
                setReviews(res.data);
            })
            .catch(function (error) {

            });
        setIsLoading(false);
    }, [setReviews]);

    // load brands data
    useEffect(() => {
        axios.get('http://localhost:5000/brands')
            .then(function (res) {
                setBrands(res.data);
            })
            .catch(function (error) {

            });
        setIsLoading(false);
    }, [setBrands]);

    return (
        <>
            {/* banner-area */}
            <section className="banner-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="banner-content text-center">
                                <div className="banner-title wow fadeInUp" data-wow-delay=".6s">your trust our asset</div>
                                <h2 className="text-white wow fadeInUp" data-wow-delay=".9s">Find your Perfect Car</h2>
                                <p className="text-white wow fadeInUp" data-wow-delay="1.2s">A car dealership, or vehicle local distribution, is a business</p>
                                <Link to="/products" className="btn primary-bg wow fadeInUp" data-wow-delay="1.5s">find it now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* banner-area-end */}

            {/* about-area */}
            <section className="about-area about-bg pt-120 pb-120">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-img-wrap">
                                <div className="row align-items-end">
                                    <div className="col-sm-6">
                                        <div className="about-exp">
                                            <h2>12<span>+</span></h2>
                                        </div>
                                        <div className="about-img">
                                            <img src={about_img_01} alt="about-1" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="about-img">
                                            <img src={about_img_02} alt="about-2" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content-wrap">
                                <div className="section-title white-title mb-40">
                                    <span className="sub-title primary-color">About Our Company</span>
                                    <h2 className="title">Global Excellence through Quality of Service</h2>
                                </div>
                                <div className="content">
                                    <div className="icon">
                                        <img src={logo} alt="logo" />
                                    </div>
                                    <p>
                                        RS Trading brings 12 years of vehicles export right to your door steps. Our experienced professional staff can help to find the best vehicles according to needs and requirements. We will make your vehicle purchase simple and pleasant experience.
                                    </p>
                                </div>
                                <div className="about-list mb-40">
                                    <ul>
                                        <li>
                                            <div className="icon"><i className="fas fa-check"></i></div>
                                            RS Trading is the No.1 Used Car Exporter in Japan!
                                        </li>
                                        <li>
                                            <div className="icon"><i className="fas fa-check"></i></div>
                                            Our Customer Satisfaction Rate is High!
                                        </li>
                                        <li>
                                            <div className="icon"><i className="fas fa-check"></i></div>
                                            We Have a Large Selection of Low-Priced Vehicles!
                                        </li>
                                        <li>
                                            <div className="icon"><i className="fas fa-check"></i></div>
                                            We have a lot of Certified Vehicles
                                        </li>
                                    </ul>
                                </div>
                                <Link to="/contact" className="btn primary-bg">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* about-area-end */}


            {/* latest-cars-area */}
            <section className="latest-cars-area latest-cars-three gray-lite-bg pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-5 col-lg-6">
                            <div className="section-title text-center mb-35">
                                <span className="sub-title">our Featured Cars</span>
                                <h2 className="title text-uppercase">latest Cars</h2>
                                <div className="line">
                                    <img src={'https://i.ibb.co/1XTCsTR/line.png'} alt="line" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="latest-cars-wrapper">
                        <div className="row">
                            {
                                products.slice(0, 6).map(product => <Product key={product._id} product={product}></Product>)
                            }
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="latest-car-btn text-center mt-10">
                                    <Link to="/products" className="btn primary-bg">explore ALL CARS</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* latest-cars-area-end */}


            {/* exclusive-featured-area */}
            <section className="exclusive-featured-area pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-5 col-lg-6">
                            <div className="section-title text-center mb-35">
                                <span className="sub-title">Our Exclusive Car</span>
                                <h2 className="title text-uppercase">Why Choose <span className="primary-color">RS Trading?</span></h2>
                                <div className="line">
                                    <img src={'https://i.ibb.co/1XTCsTR/line.png'} alt="line" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center align-items-xl-start">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="exc-featured-item">
                                <div className="icon">
                                    <i className="fas fa-car"></i>
                                </div>
                                <div className="content">
                                    <h5>RS Trading is the No.1 Car Exporter in Japan!</h5>
                                    <p>
                                        RS Trading has been in the car exporting business for over a decade and we have become the leading name in the used car export business.
                                    </p>
                                </div>
                            </div>
                            <div className="exc-featured-item">
                                <div className="icon">
                                    <i className="fas fa-money-bill"></i>
                                </div>
                                <div className="content">
                                    <h5>We Have a Large Selection of Low-Priced Vehicles!</h5>
                                    <p>
                                        We always have a large selection of Low-priced, discounted vehicles in our stock list. We have the best prices in the market because we keep our vehicles in our own storage allowing us to minimize our pricing
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-4 d-none d-lg-block">
                            <div className="exc-featured-img">
                                <img src={'https://i.ibb.co/Ky4V1Fn/why-choose-rs.png'} alt="why-choose-rs" />
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="exc-featured-item">
                                <div className="icon">
                                    <i className="fas fa-users"></i>
                                </div>
                                <div className="content">
                                    <h5>Customer Satisfaction Rate is High!</h5>
                                    <p>
                                        With our easy, convenient and speedy buying process and excellent customer-service, combined with low-priced, high quality vehicles, our customers are satisfied on their buying experience with us, which keeps our repeat customer rate to at least 80%.
                                    </p>
                                </div>
                            </div>
                            <div className="exc-featured-item">
                                <div className="icon">
                                    <i className="fas fa-tachometer-alt"></i>
                                </div>
                                <div className="content">
                                    <h5>Speed, Reliability, Quality & Affordability</h5>
                                    <p>
                                        RS Trading has been delivering automobiles to numerous clients worldwide, centering our activities in three main areas: the Caribbeans, Africa, and Russia.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* exclusive-featured-area-end */}

            {/* Review start */}
            <section className="review-bg pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-5 col-lg-6">
                            <div className="section-title text-center mb-35">
                                <span className="sub-title">our client reviews</span>
                                <h2 className="title text-uppercase">latest Reviews</h2>
                                <div className="line">
                                    <img src={'https://i.ibb.co/1XTCsTR/line.png'} alt="line" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <Slick {...reviewSettings}>
                            {
                                reviews.slice(0, 10).map(review => <Review key={review._id} review={review}></Review>)
                            }
                        </Slick>
                    </div>
                </div>
            </section>
            {/* Review end */}


            {/* popular-selling-brand */}
            <section className="pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="popular-selling-wrap">
                                <div className="popular-selling-top">
                                    <div className="popular-selling-title">
                                        <h4>popular selling brands</h4>
                                    </div>
                                    <div className="see-all-brand">
                                        <Link to="/brands">See all Makes</Link>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    {
                                        brands.slice(0, 8).map(brand => <Brand ew key={brand._id} brand={brand}></Brand>)
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="popular-selling-ad-banner">
                                <a href="#">
                                    <img src={'https://i.ibb.co/zZ6vMtt/ads.png'} alt="car ads" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* popular-selling-brand-end */}
        </>
    );
};

export default Home;