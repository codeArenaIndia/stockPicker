import React from 'react';

const SearchBox = ({value,handleChange,handleSearch, handleFocus})=>{
    return(
        <>
            <input 
                type="text"
                className="SearchText"
                placeholder="Search stocks"
                value={value}
                onChange={handleChange}
                onFocus={handleFocus}
                onKeyPress={event => {
                    if (event.key === 'Enter') {
                      handleSearch()
                    }
                  }}
            />
            <button  className="searchButton" onClick={handleSearch}>Search</button>
        </>
    )
}
export default SearchBox;