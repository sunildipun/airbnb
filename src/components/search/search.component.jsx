import React, { useState } from 'react'

import './search.style.scss';

import { DateRangePicker } from 'react-date-range';
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const Search = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <div className="search">
            
        </div>
    )
};

export default Search;
