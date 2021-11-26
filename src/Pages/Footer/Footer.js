import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="container-fluid footer row row-cols-lg-3 row-cols-md-2 row-cols-12 d-flex justify-content-center mx-auto py-5">
            <div>
                <h4><i className="fas fa-phone"></i> Contact Us</h4>
                <a href="tel:1234567890"><p>Phone: (+001) 234 567 890</p></a>
                <a href="mailto: medica.health@gmail.com"><p>Email: medica.health@gmail.com</p></a>
                <a href="#"><p>www.medicahealth.com</p></a>
            </div>
            <div>
                <h4><i className="far fa-address-card"></i> About Us</h4>
                <p>Mission & Values</p>
                <p>Quality & Safety</p>
                <p>Research & Innovation</p>
            </div>
            <div>
                <h4><i className="far fa-building"></i> Office Address</h4>
                <p>2nd Ave and Jermaine</p>
                <p>New York, USA</p>
                <a href="#"><p>www.medicahealth.com</p></a>
            </div>

            <a href="#header" className="text-white">
                <div className="scrollToTop">
                    <i className="fas fa-arrow-up"></i>
                </div>
            </a>
        </footer>
    );
};

export default Footer;