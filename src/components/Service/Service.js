import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { _id, title, img, description, price } = service;
    return (
        <div className="col-lg-4">
            <div className="single-service">
                <div style={{ backgroundImage: `url(${img})` }} className="service-bg"></div>
                <div className="service-content p-3">
                    <h3>{title}</h3>
                    <p>Price : ${price}</p>
                    <p>{description.slice(0, 80)}</p>
                    <div>
                        <Link to={`/services/${_id}`}>
                            <button className="btn btn-lg btn-warning">Reserve Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;