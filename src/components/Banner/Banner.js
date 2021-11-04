import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url("https://cdn.stocksnap.io/img-thumbs/960w/sunlight-sunny_5SB1IJ2O5M.jpg")` }} className="container banner">
            <div className="row banner-height justify-content-center align-items-center">
                <div className="col-lg-12">
                    <div className="content">
                        <h3 className="banner-text mb-3 blue">NATURE AWAITS</h3><br />
                        <h3 className="banner-text yellow">EXPLORE THE WORLD WITH US!</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;