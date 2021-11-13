import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import logo from "../../../images/logo.png";

const Footer = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 500,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const [isLoading, setIsLoading] = useState(false);
    const [dealers, setDealers] = useState([]);
    const [products, setProducts] = useState([]);

    // load dealers data
    useEffect(() => {
        axios.get('https://powerful-brushlands-43185.herokuapp.com/dealers')
            .then(function (res) {
                setDealers(res.data);
            })
            .catch(function (error) {

            });
        setIsLoading(false);
    }, [setDealers]);

    // load products data
    useEffect(() => {
        axios.get('https://powerful-brushlands-43185.herokuapp.com/products')
            .then(function (res) {
                setProducts(res.data);
            })
            .catch(function (error) {

            });
        setIsLoading(false);
    }, [setProducts]);

    return (
        <>
            {/* footer-brand-area */}
            <div className="footer-brand-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-6 order-2 order-md-0">
                            <div className="footer-logo primary-bg">
                                <Link to="/">
                                    <img src={logo} alt="logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-6">
                            <div className="row footer-brand-active">
                                <Slider {...settings}>
                                    {
                                        dealers.map(dealer => <div key={dealer._id} className="col">
                                            <div className="footer-brand-item">
                                                <Link to={`/dealer/${dealer._id}`}>
                                                    <img src={dealer.image ?? 'https://i.ibb.co/Wy1R6rV/no-photo.jpg'} alt={dealer.name} title={dealer.name} />
                                                </Link>
                                            </div>
                                        </div>
                                        )
                                    }
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer-brand-area-end */}

            {/* footer-area */}
            <footer className="footer-bg">
                <div className="footer-top-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="footer-widget black-bg mb-50">
                                    <div className="fw-title mb-30">
                                        <h4 className="title">Contact Us</h4>
                                    </div>
                                    <div className="footer-text mb-45">
                                        <p>
                                            RS Trading brings 12 years of vehicles export right to your door steps
                                        </p>
                                    </div>
                                    <div className="footer-contact">
                                        <ul>
                                            <li>
                                                <div className="icon"><i className="fas fa-phone"></i></div>
                                                <div className="content">
                                                    <span>PHONE NUMBER</span>
                                                    <p><a href="tel:+880171001122">+880171001122</a></p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon"><i className="fas fa-envelope"></i></div>
                                                <div className="content">
                                                    <span>EMAIL ADDRESs</span>
                                                    <p><a href="mailto:info@sbtrading.com">info@sbtrading.com</a></p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon"><i className="fas fa-map-marker-alt"></i></div>
                                                <div className="content">
                                                    <span>address</span>
                                                    <p>Shahid Kazol Sarani, Palaspole, Satkhira.</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="footer-right-wrap">
                                    <div className="row justify-content-between">
                                        <div className="col-lg-3 col-md-3 col-sm-6">
                                            <div className="footer-widget mb-50">
                                                <div className="fw-title mb-30">
                                                    <h4 className="title">Products</h4>
                                                </div>
                                                <div className="fw-link">
                                                    <ul>
                                                        {
                                                            products.slice(0, 5).map(product => <li key={product._id}><Link to={`/product/${product._id}`}>{product.name}</Link></li>)
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6">
                                            <div className="footer-widget mb-50">
                                                <div className="fw-title mb-30">
                                                    <h4 className="title">Quick Link</h4>
                                                </div>
                                                <div className="fw-link">
                                                    <ul>
                                                        <li><Link to="/about-us">Abouts Us</Link></li>
                                                        <li><Link to="/products">Products</Link></li>
                                                        <li><Link to="/reviews">Reviews</Link></li>
                                                        <li><Link to="/brands">Brands</Link></li>
                                                        <li><Link to="/contact-us">Contact Us</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-5 col-lg-6 col-md-6">
                                            <div className="footer-widget mb-50">
                                                <div className="fw-title mb-30">
                                                    <h4 className="title">Subscribe Us</h4>
                                                </div>
                                                <div className="footer-newsletter">
                                                    <form action="#">
                                                        <input type="email" placeholder="Your Mail..." />
                                                        <button className="primary-bg"><i className="fas fa-angle-double-right"></i></button>
                                                    </form>
                                                </div>
                                                <div className="footer-social">
                                                    <ul className="justify-content-center">
                                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="footer-payment-method-wrap">
                                        <div className="content">
                                            <p>We know that honesty and transparency friendly customer service</p>
                                        </div>
                                        <div className="payment-card">
                                            <img src={'https://i.ibb.co/fGbt7wt/payment-card.png'} alt="payment-card" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-8">
                                <div className="copyright-text">
                                    <p>Copyright © 2021 SB Trading. All Rights Reserved.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="copyright-text f-right">
                                    <p>Developed By: <a href="https://facebook.com/robi.tpi" target="_blank">Rabiul Islam</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* footer-area-end */}
        </>
    );
};

export default Footer;