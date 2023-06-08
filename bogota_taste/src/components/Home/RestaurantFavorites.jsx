import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RestaurantCard from '../Restaurant/RestaurantCard';
import '../../styles/FavoritesView.css';

const FavoritesView = () => {
  const [favoriteRestaurants, setFavoriteRestaurants] = useState([]);

  useEffect(() => {
    fetchFavoriteRestaurants();
  }, []);

  const fetchFavoriteRestaurants = async () => {
    try {
      const response = await axios.get('/api/favorites');
      setFavoriteRestaurants(response.data);
    } catch (error) {
      console.error('Error fetching favorite restaurants:', error);
    }
  };

  const removeFavoriteRestaurant = async (restaurantId) => {
    try {
      await axios.delete(`/api/favorites/${restaurantId}`);
      setFavoriteRestaurants((prevRestaurants) =>
        prevRestaurants.filter((restaurant) => restaurant.id !== restaurantId)
      );
    } catch (error) {
      console.error('Error removing favorite restaurant:', error);
    }
  };

  return (
    <div className="container">
      <h2 className="heading">Tus restaurantes favoritos</h2>
      {favoriteRestaurants.length > 0 && (
        <div className="restaurant-list">
          {favoriteRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              onRemove={() => removeFavoriteRestaurant(restaurant.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesView;