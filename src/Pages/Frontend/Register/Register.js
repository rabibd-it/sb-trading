import React from 'react';
import Breadcrumb from '../../Shared/Breadcrumb/Breadcrumb';
import google from '../../../images/google.png';
import github from '../../../images/github.png';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useLocation, useHistory } from 'react-router';
import Loader from '../../Shared/Loader/Loader';
const Register = () => {

    const location = useLocation();
    const history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { isLoading, authError, registerUser, signInWithGoogle, signInWithGithub } = useAuth();

    // Customr Registration
    const onSubmit = data => {
        registerUser(data.email, data.password, data.name, data.phone, data.address, history);
    };

    // Google Registration
    const handleGoogleSignUp = () => {
        signInWithGoogle(location, history);
    }

    // Github Registration
    const handleGithubSignUp = () => {
        signInWithGithub(location, history);
    }
    return (
        <>
            <Breadcrumb title="Sign Up"></Breadcrumb>

            {/* register area start */}
            <section className="login-register-area gray-lite pb-120">
                <div className="container">
                    <div className="login-reg-wrap col-12 col-lg-6 mx-auto">
                        <div className="row no-gutters">
                            <div className="col">
                                {!isLoading && <>
                                    <div className="login-wrap">
                                        <h3 className="widget-title">Register</h3>
                                        {authError && <div className="text-danger fw-bold mb-3">{authError}</div>}
                                        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                                            <div className="row">
                                                <div className="col-lg-7">
                                                    <div className="form-grp">
                                                        <label htmlFor="name">Name <span>*</span></label>
                                                        <input type="text" className="form-control" id="name" placeholder="Name" {...register("name", { required: true })} />
                                                        {errors.name && <span className="text-danger w-100">This field is required</span>}
                                                    </div>
                                                </div>
                                                <div className="col-lg-5">
                                                    <div className="form-grp">
                                                        <label htmlFor="phone">Phone <span>*</span></label>
                                                        <input type="text" className="form-control" id="phone" placeholder="Phone" {...register("phone", { required: true })} />
                                                        {errors.phone && <span className="text-danger w-100">This field is required</span>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-grp">
                                                <label htmlFor="address">Address <span>*</span></label>
                                                <input type="text" className="form-control" id="address" placeholder="Address" {...register("address", { required: true })} />
                                                {errors.address && <span className="text-danger w-100">This field is required</span>}
                                            </div>
                                            <div className="form-grp">
                                                <label htmlFor="email">Email <span>*</span></label>
                                                <input type="email" className="form-control" id="email" placeholder="Email" {...register("email", { required: true })} />
                                                {errors.email && <span className="text-danger w-100">This field is required</span>}
                                            </div>
                                            <div className="form-grp">
                                                <label htmlFor="password">Password <span>*</span></label>
                                                <input type="password" className="form-control" id="password" placeholder="Password" {...register("password", { required: true })} />
                                                {errors.password && <span className="text-danger w-100">This field is required</span>}
                                            </div>
                                            <span className="or">Or</span>
                                            <ul className="action">
                                                <li>Continue with :</li>
                                                <li onClick={handleGoogleSignUp}><img src={google} alt="google" /></li>
                                                <li onClick={handleGithubSignUp}><img src={github} alt="github" /></li>
                                            </ul>
                                            <button className="btn primary-bg w-100 text-center">Register</button>
                                        </form>

                                        <p className="text-center mt-5">
                                            <span className="mx-2">Already have an account?</span>
                                            <Link to="/login">
                                                <span className="primary-color">Sign In</span>
                                            </Link>
                                        </p>
                                    </div>
                                </>}
                                {isLoading && <Loader></Loader>}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* register area end */}
        </>
    );
};

export default Register;