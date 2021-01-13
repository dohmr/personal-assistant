import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrush, faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { faGoogle } from '@fortawesome/free-brands-svg-icons';
// import { faAmazon } from '@fortawesome/free-brands-svg-icons';

function Services() {
    return (
        <div className="services">
            <h1 className="py-5">My Services </h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle" ><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
                            <h3>Web Design</h3>
                            <p> ...</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle" ><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>
                            <h3>Web Development</h3>
                            <p> ...</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle" ><FontAwesomeIcon className="icon" icon={faBrush} size="2x" /></div>
                            <h3>Graphic Design</h3>
                            <p> ...</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Services
