import React from 'react';
import Form from 'react-bootstrap/Form';
import './Contacts.css';
const Contacts = () => {
    return (
        <div>
            <section>
                <div id="contact-us" className="flex-container">
                    <div className="flex-left img-container">
                        <img src="./img/about_img.jpg" alt='' />
                    </div>
                    <div className="flex-right">
                        <h3>Contact Us</h3>
                        <p>Want to say hello or ask a serious business question?</p>
                        <h2>
                            <span id="color1">Send us a message</span>
                        </h2>


                        <Form>
                            <Form.Group controlId="form.Name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" />
                            </Form.Group>
                            <Form.Group controlId="form.Email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group controlId="form.Textarea">
                                <Form.Label>Comment</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Form>



                        <a href="/Contacts">Contact Us</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contacts;