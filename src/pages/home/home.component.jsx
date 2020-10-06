import React from 'react';
import './home.style.scss';

import Banner from './../../components/banner/banner.component'

const Home = () => {
    return (
        <div className='home'>
            <Banner />

            <div className="home__section"></div>
        </div>
    )
}

export default Home;
