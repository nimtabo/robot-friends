import React from 'react';


const SearchBox = ({ searchChange }) => {
  return (
    <div>
      <input
        className="pa2 ma1 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  )
};

export default SearchBox;