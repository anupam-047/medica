import React from 'react';
import './Expert.css';

const Expert = ({ expert }) => {
    const { name, img, expertise, open, exprence } = expert;

    return (
        <div className="expert">
            <img src={img} className="img-fluid" alt={name} />
            <div>
                <h3><i className="fas fa-user"></i> {name}</h3>
                <p>Open Hours: {open}</p>
                <p>Expertise: {expertise}</p>
                <p>Exprence: {exprence}</p>
            </div>

        </div>
    );
};

export default Expert;