import React, {useState} from 'react';
import './banner.style.scss';

import CustomButtons from './../custom-buttons/custom-buttons.component';
import Search from './../search/search.component';

import { Button } from "@material-ui/core";

const Banner = () => {
    const [showSearch, setShowSearch] = useState(false);
    return (
        <div className="banner">
            <div className='banner__search'>
            {showSearch && <Search />}

            <Button onClick={() => setShowSearch(!showSearch)} className='banner__searchButton' variant='outlined'>
                {showSearch ? "Hide" : "Search Dates"}
            </Button>
            </div>
            <div className="banner__info">
                <h1>Get out and strech your imagination</h1>
                <h5>Plan a different kind of getaway to uncover the hidden gems near you.</h5>
                <CustomButtons text={'Explore More'}/>
            </div>
        </div>
    )
}

export default Banner;
