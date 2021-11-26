import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

const Banner = () => {

    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./images/health-services/health-service-1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h6>Intensive Care</h6>
                        <small>You need your car, and when you leave it in the shop for repairs, you can't help worrying about the cost.</small>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./images/health-services/health-service-2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h6>Pediatric Care</h6>
                        <small>If you suspect that the repair shop has not properly repaired the vehicle or charged you too much and you can't get them to resolve the problem to your satisfaction</small>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./images/health-services/health-service-3.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h6>Psychiatric Unit</h6>
                        <small>If you notice the same problem with your car is recurring, or find a new problem that should not have arisen.</small>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./images/health-services/health-service-4.jpg"
                        alt="Fourth slide"
                    />

                    <Carousel.Caption>
                        <h6>Emergency Unit</h6>
                        <small>The shop fails to notify you and secure your additional approval, in writing, for any additional work to be done that was not set forth.</small>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./images/health-services/health-service-5.jpg"
                        alt="Fifth slide"
                    />

                    <Carousel.Caption>
                        <h6>Cardiology Department</h6>
                        <small>Your best protection from fraud and faulty repair work is to find a reputable mechanic or repair shop before your car needs to be repaired.</small>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./images/health-services/health-service-6.jpg"
                        alt="Six slide"
                    />

                    <Carousel.Caption>
                        <h6>Ophthalmology Department</h6>
                        <small>The authorization to commence repairs should also include the date and time that you signed the form. If you decide to have repairs made.</small>
                    </Carousel.Caption>
                </Carousel.Item>
               
            </Carousel>
        </div>
    );
};

export default Banner;