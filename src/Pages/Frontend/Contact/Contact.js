import React from 'react';
import { useForm } from 'react-hook-form';
import line from '../../../images/line.png';
import Breadcrumb from '../../Shared/Breadcrumb/Breadcrumb';

const Contact = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    // Contact Us From
    const onSubmit = data => {
        console.log(data);
    };
    return (
        <>
            <Breadcrumb title="Contact Us"></Breadcrumb>
            {/* contact-area */}
            <section className="contact-area pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6">
                            <div className="contact-info-wrap">
                                <div className="section-title text-left mb-25">
                                    <span className="sub-title">contact information</span>
                                    <h2 className="title">Our Address</h2>
                                    <div className="line">
                                        <img src={line} alt="line" />
                                    </div>
                                </div>
                                <p>If you have any questions or comments about our business and/or are interested in our cars, please feel free to contact us</p>
                                <ul className="contact-info-list">
                                    <li>
                                        <div className="icon"><i className="fas fa-map-marker-alt"></i></div>
                                        <div className="content">
                                            <h5>Address</h5>
                                            <p>Shahid Kazol Sarani, Palaspole, Satkhira.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon"><i className="fas fa-phone-alt"></i></div>
                                        <div className="content">
                                            <h5>Hotline Number</h5>
                                            <p><a href="tel:+880171001122">+880171001122</a></p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon"><i className="far fa-envelope"></i></div>
                                        <div className="content">
                                            <h5>Ask your question</h5>
                                            <p><a href="mailto:info@sbtrading.com">info@sbtrading.com</a></p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon"><i className="fas fa-globe"></i></div>
                                        <div className="content">
                                            <h5>Web</h5>
                                            <p><a href="http://sbtrading.com">www.sbtrading.com</a></p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            <div className="contact-form-wrap">
                                <div className="login-wrap">
                                    <h3 className="widget-title">Send your <span className="primary-color">request</span></h3>
                                    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                                        <div className="form-grp">
                                            <label htmlFor="name">Your Name <span>*</span></label>
                                            <input type="name" className="form-control" id="name" placeholder="Name" {...register("name", { required: true })} />
                                            {errors.name && <span className="text-danger w-100">This field is required</span>}
                                        </div>
                                        <div className="form-grp">
                                            <label htmlFor="email">Your Email <span>*</span></label>
                                            <input type="email" className="form-control" id="email" placeholder="Email" {...register("email", { required: true })} />
                                            {errors.email && <span className="text-danger w-100">This field is required</span>}
                                        </div>
                                        <div className="form-grp">
                                            <label htmlFor="message">Your Massage <span>*</span></label>
                                            <textarea className="form-control" id="message" placeholder="Message" {...register("message", { required: true })}></textarea>
                                            {errors.message && <span className="text-danger w-100">This field is required</span>}
                                        </div>
                                        <button className="btn primary-bg">Send</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* contact-area-end */}
        </>
    );
};

export default Contact;