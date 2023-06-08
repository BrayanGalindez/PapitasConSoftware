import React, { useState } from 'react';

const Filter = ({ handleFilter }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    handleFilter(event.target.value);
  };

  return (
    <div className="filter-container">
      <h3>Filter Restaurants</h3>
      <div className="filter-options">
        <label>
          <input
            type="radio"
            value="rating"
            checked={selectedOption === 'rating'}
            onChange={handleOptionChange}
          />
          Rating
        </label>
        <label>
          <input
            type="radio"
            value="distance"
            checked={selectedOption === 'distance'}
            onChange={handleOptionChange}
          />
          Distance
        </label>
        <label>
          <input
            type="radio"
            value="price"
            checked={selectedOption === 'price'}
            onChange={handleOptionChange}
          />
          Price
        </label>
      </div>
    </div>
  );
};

export default Filter;