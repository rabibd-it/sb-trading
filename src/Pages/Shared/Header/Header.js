import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';
import noPhoto from '../../../images/no-photo.jpg';
const Header = () => {
    const { user, logout, admin } = useAuth();
    return (
        <header className="header">
            {/* header top area start */}
            <div className="header-top-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d-none d-md-block">
                            <div className="header-top-action">
                                <ul>
                                    <li>
                                        <i className="far fa-envelope"></i>
                                        <a href="mailto:info@sbtrading.com">info@sbtrading.com</a>
                                    </li>
                                    <li>
                                        <i className="fas fa-phone"></i>
                                        <a href="tel:+880171001122">+880171001122</a>
                                    </li>
                                    <li>
                                        <i className="far fa-clock"></i>
                                        09:00 AM To 06:00 PM
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="header-top-right">
                                <ul>
                                    <li className="header-top-social">
                                        <a href="#" target="_blank"><i className="fab fa-facebook-square"></i></a>
                                        <a href="#" target="_blank"><i className="fab fa-twitter-square"></i></a>
                                        <a href="#" target="_blank"><i className="fab fa-linkedin"></i></a>
                                    </li>
                                    {user.email ? <>
                                        <li className="header-top-user">
                                            <div className="top-user-thumb">
                                                <img src={user.photoURL ? user.photoURL : noPhoto} />
                                            </div>
                                            {user && admin?.role === 'customer' ? <Link to="/user/dashboard">{user.displayName}</Link> : <Link to="/admin/dashboard">{user.displayName}</Link>}
                                        </li>
                                        <li className="header-top-user primary-color">
                                            <span style={{ cursor: 'pointer' }} onClick={logout}>Logout</span>
                                        </li>
                                    </> :
                                        <li className="header-top-login">
                                            <Link to="/login">
                                                <i className="far fa-user-circle primary-color"></i>
                                                LOGIN
                                            </Link>
                                            <Link to="/register">REGISTER</Link>
                                        </li>
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* header top area end */}

            {/* main navigation start */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <img
                            src={logo}
                            alt={'SB Trading Agency'}
                            title={'SB Trading Agency'}
                        />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerMain" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerMain">
                        <ul className="navbar-nav col-lg-auto me-lg-auto justify-content-center">
                            <li className="nav-item">
                                <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about-us" className="nav-link" activeClassName="active">About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/products" className="nav-link" activeClassName="active">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/reviews" className="nav-link" activeClassName="active">Reviews</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/brands" className="nav-link" activeClassName="active">Brands</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact-us" className="nav-link" activeClassName="active">Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="text-end">
                        {user.email && <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerAdmin" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>}
                        <div className="collapse navbar-collapse" id="navbarTogglerAdmin">
                            <ul className="navbar-nav col-lg-auto me-lg-auto justify-content-center">
                                {user && admin?.role === 'admin' && <>
                                    <li className="nav-item">
                                        <NavLink exact to="/admin/dashboard" className="nav-link" activeClassName="active">Dashboard</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/admin/orders" className="nav-link" activeClassName="active">Manage All Orders</NavLink>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Products
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <NavLink to="/admin/products/all" className="nav-link" activeClassName="active">Manage Products</NavLink>
                                            <NavLink to="/admin/products/create" className="nav-link" activeClassName="active">Add Products</NavLink>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/admin/user/role" className="nav-link" activeClassName="active">Make an Admin</NavLink>
                                    </li>
                                </>}
                                {user && admin?.role === 'customer' && <>
                                    <li className="nav-item">
                                        <NavLink exact to="/user/dashboard" className="nav-link" activeClassName="active">Dashboard</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/user/pay-now" className="nav-link" activeClassName="active">Pay Now</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/user/orders" className="nav-link" activeClassName="active">My Orders</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/user/reviews" className="nav-link" activeClassName="active">Reviews</NavLink>
                                    </li>
                                </>}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            {/* main navigation end */}
        </header>
    );
};

export default Header;