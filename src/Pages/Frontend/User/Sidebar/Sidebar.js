import React from 'react';
import useAuth from '../../../../hooks/useAuth';

const Sidebar = () => {
    const { user } = useAuth();
    return (
        <div className="col-xl-4 col-lg-5 col-md-9 order-2 order-lg-0">
            <aside className="author-profile-sidebar">
                <div className="author-profile-wrap">
                    <div className="author-profile-thumb">
                        <img style={{ maxHeight: '150px', width: '150px' }} src={user.photoURL ? user.photoURL : 'https://i.ibb.co/Wy1R6rV/no-photo.jpg'} alt={user.displayName} />
                    </div>
                    <h5 className="name">{user.displayName}</h5>
                    <span className="des">Customer</span>
                    <div className="location">
                        <p><i className="fas fa-map-marker-alt"></i> Shahid Kazol Sarani, Palaspole, Satkhira.</p>
                    </div>
                    <div className="author-profile-list">
                        <ul>
                            <li><i className="fas fa-shopping-basket"></i>Total Orders <span>0</span></li>
                            <li><i className="fas fa-comment-dots"></i>Total Reviews <span>1</span></li>
                            <li><i className="fas fa-truck"></i>Total Delivery<span>2</span></li>
                        </ul>
                    </div>
                    <div className="author-profile-btn">
                        <a href="#" className="btn black">Follow</a>
                        <a href="#" className="btn primary-bg">Message</a>
                    </div>
                    <div className="author-contact-info">
                        <ul>
                            <li>
                                <i className="fas fa-phone"></i>
                                <a href={`mailto:${user?.phone}`}>{user.phone ?? '+880171001122'}</a>
                            </li>
                            <li>
                                <i className="far fa-envelope"></i>
                                <a href={`mailto:${user.email}`}>{user.email}</a>
                            </li>
                        </ul>
                    </div>
                    <div className="author-profile-social">
                        <ul>
                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;