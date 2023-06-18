import React, { useState } from 'react';
import '../../styles/Restaurant/RestaurantPage.css'
import RestaurantList from './RestaurantList';

const RestaurantPage = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const handleViewMore = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  // Obtener datos de restaurantes desde la base de datos o API
  const restaurants = [
    { id: 1, name: 'Restaurante 1', image: 'restaurante1.jpg', description: 'Descripción del Restaurante 1' },
    { id: 2, name: 'Restaurante 2', image: 'restaurante2.jpg', description: 'Descripción del Restaurante 2' },
    // ... otros restaurantes
  ];

  return (
    <div>
      <h1>Restaurantes</h1>
      <RestaurantList restaurants={restaurants} onViewMore={handleViewMore} />
      {selectedRestaurant && (
        <div className="restaurant-details">
          {/* Mostrar información completa del restaurante */}
          <h2>{selectedRestaurant.name}</h2>
          <p>{selectedRestaurant.description}</p>
          {/* ... otras opciones y funcionalidades */}
        </div>
      )}
    </div>
  );
};

export default RestaurantPage;