import React, { useState } from 'react';
import emailjs from "emailjs-com";

const Contact = () => {

    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_DxPhLCgGhFBdY2uQFQWfn";

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(serviceID, templateID, e.target, userID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className="contacts">
            <div className="text-center">
                <h1>contact me</h1>
                <p>Please fill out the following form with Project inquiries</p>
            </div>
            <div className="container">
                <form onSubmit={sendEmail}>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            {/*/name input/*/}
                            <input
                                id="name"
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                name="name"
                            />
                            <div className="line"></div>
                            {/*/phone input/*/}
                            <input
                                id="phone"
                                type="text"
                                className="form-control"
                                placeholder="Phone Number"
                                name="phone"
                            />
                            <div className="line"></div>
                            {/*/email input/*/}
                            <input
                                id="email"
                                type="email"
                                className="form-control"
                                placeholder="E-Mail"
                                name="email"
                            />
                            <div className="line"></div>
                            {/*/subject input/*/}
                            <input
                                id="subject"
                                type="text"
                                className="form-control"
                                placeholder="Type of Project"
                                name="subject"
                            />
                            <div className="line"></div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <textarea
                                id="description"
                                type="text"
                                className="form-control"
                                placeholder="Project Details"
                                name="description"
                            ></textarea>
                            <div className="line"></div>
                            <button className="btn-main-offer contact-btn" type="submit">Send</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
