import React from 'react';
import './SearchBox.css';

const SearchBox = ({searchfield, searchChange}) => {
    return(
        <div>
            <input 
                type="search" 
                placeholder="search cheeses"
                onChange={searchChange}
                />

        </div>
    );


}

export default SearchBox;
