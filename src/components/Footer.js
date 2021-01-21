import React from 'react'
import {
    FacebookShareButton,
    FacebookIcon,
    LinkedinIcon,
    LinkedinShareButton,
    InstapaperIcon,
    InstapaperShareButton
} from "react-share";


const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Stafford Cnty. Fredericksburg Cty.</p>
                            {/* <p></p> */}
                        </div>
                        <div className="d-flex">
                            <a href="555-555-5555">+(703)123-4567</a>
                            {/* <p></p> */}
                        </div>
                        <div className="d-flex">
                            <p>Email@gmail.com</p>
                            {/* <p></p> */}
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav">Home</a><br />
                                <a className="footer-nav">About</a><br />
                                <a className="footer-nav">Services</a><br />
                            </div>
                            <div className="col">
                                <a className="footer-nav">Experience</a><br />
                                <a className="footer-nav">Portfolio</a><br />
                                <a className="footer-nav">Contact</a><br />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                                url={"this website"}
                                quote={"Great work !"}
                                hashtag={"#handyGuy"}
                            >
                                <FacebookIcon className="mx-3" size={36} />
                            </FacebookShareButton>
                            <LinkedinShareButton
                                url={"this website"}
                                quote={"Great work !"}
                                hashtag={"#handyGuy"}
                            >
                                <LinkedinIcon className="mx-3" size={36} />
                            </LinkedinShareButton>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
