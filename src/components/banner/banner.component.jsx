import React from 'react';
import './banner.style.scss';

import CustomButtons from './../custom-buttons/custom-buttons.component'

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner__info">
                <h1>Get out and strech your imagination</h1>
                <h5>Plan a different kind of getaway to uncover the hidden gems near you.</h5>
                <CustomButtons text={'Explore More'}/>
            </div>
        </div>
    )
}

export default Banner;
