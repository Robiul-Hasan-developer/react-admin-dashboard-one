import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const SearchBox = () => {
    return (
        <div className="search-box">
            <span className="search-box__icon"> <SearchOutlinedIcon className="icon"/> </span>
            <input type="search" className="form-control shadow-none" placeholder="Search..."/>
        </div>
    );
};

export default SearchBox;