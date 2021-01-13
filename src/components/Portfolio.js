import React from 'react';
import gkLand from "../images/gk-land.png";
import gkSearch from "../images/gk-games.png";
import ogPortfolio from "../images/og-portfolio.png";
import up2u from "../images/up2u.png";

function Portfolio() {
    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={gkLand} alt="Game Kiwi App..." />
                        <div className="overflow"></div>
                    </div>

                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={ogPortfolio} alt="Original Portfolio page..." />
                        <div className="overflow"></div>
                    </div>

                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={up2u} alt="Remote WebDev Job search..." />
                        <div className="overflow"></div>
                    </div>

                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={gkSearch} alt="Game Kiwi App..." />
                        <div className="overflow"></div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Portfolio
