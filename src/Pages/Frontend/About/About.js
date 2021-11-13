import React from 'react';
import Breadcrumb from '../../Shared/Breadcrumb/Breadcrumb';
import about from '../../../images/about.jpg';
import line from '../../../images/line.png';
import about_img_01 from '../../../images/about_img-1.jpg';
import about_img_02 from '../../../images/about_img-2.jpg';
import logo from '../../../images/logo.png';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>
            <Breadcrumb title="About Us"></Breadcrumb>
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
                                    <div className="icon d-none d-md-block">
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
        </>
    );
};

export default About;