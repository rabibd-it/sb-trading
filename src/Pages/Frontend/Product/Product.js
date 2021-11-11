import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, price, image, transmission, fuel_type, mileage, rating, description } = product;
    return (
        <>
            <div className="col-lg-4 col-md-6">
                <div className="latest-car-item mb-40">
                    <div className="latest-car-thumb">
                        <Link to={`/product/${_id}`}>
                            <img className="w-100" src={image ?? 'https://i.ibb.co/Wy1R6rV/no-photo.jpg'} alt={name} title={name} />
                        </Link>
                        <Link to={`/product/${_id}`} className="btn book-btn">
                            Order now
                        </Link>
                    </div>
                    <div className="latest-car-content-wrap">
                        <div className="latest-car-content">
                            <h5>
                                <Link to={`/product/${_id}`} className="primary-color">{name}</Link>
                            </h5>
                            <p className="text-justify lh-base">{description.slice(0, 100)}</p>
                        </div>
                        <div className="latest-car-meta text-capitalize">
                            <ul>
                                <li><i className="fas fa-cog"></i> {transmission}</li>
                                <li><i className="fas fa-gas-pump"></i> {fuel_type}</li>
                                <li><i className="fas fa-subway"></i> {mileage}</li>
                            </ul>
                        </div>
                        <div className="latest-car-bottom">
                            <ul>
                                <li className="rating">
                                    {
                                        Array.from(Array(parseInt(rating))).map((_, index) => (
                                            <i key={index} className="fas fa-star"></i>
                                        ))
                                    }
                                </li>
                                <li>
                                    <span className="total">Total Price :</span>
                                    <span className="price">${price}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;