import React, { useState } from 'react';
import axios from 'axios';

function Search({ updateRestaurants }) {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get('URL_DE_TU_API', {
        params: { query }
      });
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