import React from 'react';
import { Link } from 'react-router-dom';
import breadcrumb from '../../../images/breadcrumb-bg.jpg';
import './Breadcrumb.css';

const Breadcrumb = ({ title }) => {
    return (
        <>
            {/* breadcrumb area end */}
            <section className="breadcrumb-area breadcrumb-bg" style={{
                backgroundImage: "url('" + breadcrumb + "')"
            }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb-content text-center">
                                <h2>{title}</h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">{title}</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* breadcrumb area end */}
        </>
    );
};

export default Breadcrumb;