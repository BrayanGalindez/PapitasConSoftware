import React, { useState } from 'react';
import '../../styles/Home/Filter.css';

const Filter = ({ handleFilter }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    handleFilter(event.target.value);
  };

  return (
    <div className="filter-container">
      <h3 className="filter-title">Filtrar por:</h3>
      <div className="filter-options">
        <label className="filter-option">
          <input
            type="radio"
            value="rating"
            checked={selectedOption === 'rating'}
            onChange={handleOptionChange}
          />
          <span className="filter-label">Calificación</span>
        </label>
        <label className="filter-option">
          <input
            type="radio"
            value="distance"
            checked={selectedOption === 'distance'}
            onChange={handleOptionChange}
          />
          <span className="filter-label">Distancia</span>
        </label>
        <label className="filter-option">
          <input
            type="radio"
            value="price"
            checked={selectedOption === 'price'}
            onChange={handleOptionChange}
          />
          <span className="filter-label">Precio</span>
        </label>
      </div>
    </div>
  );
};

export default Filter;