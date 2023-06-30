import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/Restaurant/RestaurantPage.css';
import RestaurantCard from './RestaurantCard';

const RestaurantPage = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [restaurants, setRestaurants] = useState([]);

  const handleViewMore = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/restaurantes/all');
        const data = response.data;

        if (Array.isArray(data.restaurantes)) {
          setRestaurants(data.restaurantes);
        }
      } catch (error) {
        console.error('Error al obtener los restaurantes:', error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div>
      <h1>Restaurantes</h1>
      <div className="restaurant-list">
        {Array.isArray(restaurants) &&
          restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.nit}
              name={restaurant.nombre}
              image={restaurant.image}
              description={restaurant.description}
              direccion={restaurant.direccion}
              onViewMore={() => handleViewMore(restaurant)}
            />
          ))}
      </div>
      {selectedRestaurant && (
        <div className="restaurant-details">
          {/* Mostrar información completa del restaurante */}
          <h2>{selectedRestaurant.nombre}</h2>
          <p>{selectedRestaurant.description}</p>
          {/* ... otras opciones y funcionalidades */}
        </div>
      )}
    </div>
  );
};

export default RestaurantPage;