import React from 'react';
import './home.style.scss';

import Banner from './../../components/banner/banner.component'

const Home = () => {
    return (
        <div className='home'>
            <h1>Home Page</h1>
            <Banner />
        </div>
    )
}

export default Home;
