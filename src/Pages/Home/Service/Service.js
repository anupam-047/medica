import React from 'react';
import { useHistory } from 'react-router';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, description, price, time, img } = service;

    let history = useHistory();
    const handleDetails = (id) => {
        history.push(`/service-details/${id}`);
    }


    return (
        <div className="service">
            <img src={img} width="300" height="200" className="img-fluid" alt={name} />
            <div className="service-body">
                <h4>{name}</h4>
                <p>{description}</p>
                <p><i className="fas fa-tags text-warning"></i> Price: {price.toFixed(2)} USD</p>
                <p><i className="fas fa-history text-warning"></i> Open Time: {time.toFixed(2)}PM</p>
                <div className="service-footer">
                    <button onClick={() => handleDetails(id)} className="btn btn-light fw-bold"><i className="fas fa-street-view"></i> View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Service;