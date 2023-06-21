import React, { useState } from 'react';
import axios from 'axios';

function Search({ updateRestaurants }) {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/restaurantes/?palabra_clave='+ query );
      console.log(response.data);
      updateRestaurants(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Buscar restaurante..."
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
}

export default Search;