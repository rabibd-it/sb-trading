import React from 'react';
import { Link } from 'react-router-dom';

const Brand = ({ brand }) => {
    const { _id, name, image } = brand;
    return (
        <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="popular-selling-items">
                <Link to={`/brand/${_id}`}>
                    <img src={image ?? 'https://i.ibb.co/Wy1R6rV/no-photo.jpg'} alt={name} title={name} />
                </Link>
            </div>
        </div>
    );
};

export default Brand;