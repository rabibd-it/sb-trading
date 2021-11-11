import React from 'react';

const Review = ({ review }) => {
    const { name, image, rating, description } = review;
    return (
        <div className="col">
            <div className="review-inner">
                <div className="content-box">
                    <div className="user">
                        <a href="#">
                            <img className="img-fluid" src={image ?? 'https://i.ibb.co/Wy1R6rV/no-photo.jpg'} alt={name} title={name} />
                        </a>
                    </div>
                    <div className="review-info">
                        <h3>{name}</h3>
                        <div className="rating">
                            <span>Rating: </span>
                            {
                                Array.from(Array(parseInt(rating))).map((_, index) => (
                                    <i key={index} className="fas fa-star"></i>
                                ))
                            }
                        </div>
                        <p className="text-justify lh-base">{description.slice(0, 500)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;