import React from 'react'
import Photo from "../Portrait.jpg"

function AboutMe() {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                    <img className="profile-img" src={Photo} alt="Pic of Shawn" />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About Me!</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Donec ac odio tempor orci dapibus ultrices in iaculis. Ornare suspendisse sed nisi lacus sed viverra tellus in hac.
                        Sem integer vitae justo eget magna fermentum. Praesent tristique magna sit amet purus gravida quis.
                        Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Faucibus scelerisque eleifend donec pretium vulputate sapien.
                        Amet purus gravida quis blandit turpis cursus. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus.
                        Mauris augue neque gravida in fermentum et sollicitudin. Nec ultrices dui sapien eget mi proin sed libero enim. At lectus urna duis convallis.
                        Tristique senectus et netus et malesuada. Quam viverra orci sagittis eu volutpat odio facilisis mauris sit.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default AboutMe
