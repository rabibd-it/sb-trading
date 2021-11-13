import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Breadcrumb from '../../Shared/Breadcrumb/Breadcrumb';
import Review from '../Review/Review';

const Reviews = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [reviews, setReviews] = useState([]);
    // load reviews data
    useEffect(() => {
        axios.get('https://powerful-brushlands-43185.herokuapp.com/reviews')
            .then(function (res) {
                setReviews(res.data);
            })
            .catch(function (error) {

            });
        setIsLoading(false);
    }, [setReviews]);
    return (
        <>
            <Breadcrumb title="Reviews"></Breadcrumb>
            <section className="review-bg pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-5 col-lg-6">
                            <div className="section-title text-center mb-35">
                                <span className="sub-title">our client reviews</span>
                                <h2 className="title text-uppercase">All Reviews</h2>
                                <div className="line">
                                    <img src={'https://i.ibb.co/1XTCsTR/line.png'} alt="line" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row row-cols-2 gy-5">
                        {
                            reviews.map(review => <Review key={review._id} review={review}></Review>)
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Reviews;