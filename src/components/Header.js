import React from 'react';
import Type from "react-typed";

/* 107:48*/
const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>develop and design</h1>
                <Type 
                    className="type-text"
                    strings={["Web Design", "Web Development", "Graphic Design", "Cool Dude"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-main-offer">Contact Me</a>

            </div>

        </div>
    )
}

export default Header
