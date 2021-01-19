import React from 'react'

const Contact = () => {
    return (
        <div className="contacts">
            <div className="text-center">
                <h1>contact me</h1>
                <p>Please fill out the following form with Project inquiries</p>
            </div>
            <div className="container">
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
                            phone="phone"
                        />
                        <div className="line"></div>
                        {/*/email input/*/}
                        <input
                            id="email"
                            type="email"
                            className="form-control"
                            placeholder="E-Mail"
                            email="email"
                        />
                        <div className="line"></div>
                        {/*/subject input/*/}
                        <input
                            id="subject"
                            type="text"
                            className="form-control"
                            placeholder="Type of Project"
                            subject="subject"
                        />
                        <div className="line"></div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <textarea
                            id="description"
                            type="text"
                            className="form-control"
                            placeholder="Project Details"
                            subject="subject"
                        ></textarea>
                        <div className="line"></div>
                        <button className="btn-main-offer contact-btn" type="submit">Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
