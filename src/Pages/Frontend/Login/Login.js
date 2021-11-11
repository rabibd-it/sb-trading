import React from 'react';
import Breadcrumb from '../../Shared/Breadcrumb/Breadcrumb';
import google from '../../../images/google.png';
import github from '../../../images/github.png';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useLocation, useHistory } from 'react-router';
import Loader from '../../Shared/Loader/Loader';
const Login = () => {

    const location = useLocation();
    const history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { isLoading, authError, loginUser, signInWithGoogle, signInWithGithub } = useAuth();

    // Customr Registration
    const onSubmit = data => {
        loginUser(data.email, data.password, location, history);
    };

    // Google Login
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }

    // Github Login
    const handleGithubSignIn = () => {
        signInWithGithub(location, history);
    }
    return (
        <>
            <Breadcrumb title="Sign In"></Breadcrumb>

            {/* login area start */}
            <section className="login-register-area gray-lite pb-120">
                <div className="container">
                    <div className="login-reg-wrap col-12 col-lg-6 mx-auto">
                        <div className="row no-gutters">
                            <div className="col">
                                {!isLoading && <>
                                    <div className="login-wrap">
                                        <h3 className="widget-title">Login</h3>
                                        {authError && <div className="text-danger fw-bold mb-3">{authError}</div>}
                                        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
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
                                                <li onClick={handleGoogleSignIn}><img src={google} alt="google" /></li>
                                                <li onClick={handleGithubSignIn}><img src={github} alt="github" /></li>
                                            </ul>
                                            <button className="btn primary-bg w-100 text-center">Login</button>
                                        </form>

                                        <p className="text-center mt-5">
                                            <span className="mx-2">New to SB Trading & Travels?</span>
                                            <Link to="/register">
                                                <span className="primary-color">Create an account</span>
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
            {/* login area end */}
        </>
    );
};

export default Login;