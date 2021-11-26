import React from 'react';
import Banner from './Banner/Banner';
import Experts from './Experts/Experts';
import Services from './Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Experts />
            <section id="booking" style={{ background: "url('/about-banner.jpg')" }}>
                <div id="booking-container">
                    <h3>Reservation</h3>
                    <h1>Subscribe us for Offers & Health Tips</h1>
                    <a href="/Contacts">Book Now</a>
                </div>
            </section>
        </div>
    );
};

export default Home;