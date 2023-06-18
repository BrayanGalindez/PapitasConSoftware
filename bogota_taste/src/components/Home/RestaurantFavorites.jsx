import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/Home/Footer.css';
import '../../styles/Home/TopBar.css';
import '../../styles/Home/RestaurantFavorites.css';
import TopBar from './TopBar.jsx';
import Footer from './Footer.jsx';
import RestaurantCard from '../Restaurant/RestaurantCard.jsx';


const RestaurantFavorites = () => {
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
    <div className="restaurant-favorites">
      <TopBar />
      <h2 className="restaurant-favorites-heading">Tus restaurantes favoritos</h2>
      {favoriteRestaurants.length > 0 && (
        <div className="restaurant-favorites-list">
          {favoriteRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              onRemove={() => removeFavoriteRestaurant(restaurant.id)}
            />
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default RestaurantFavorites;