import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import '../../styles/Home/Footer.css';
import '../../styles/Home/TopBar.css';
import '../../styles/Home/RestaurantFavorites.css';
import TopBar from './TopBar.jsx';
import Footer from './Footer.jsx';
import RestaurantCard from '../Restaurant/RestaurantCard.jsx';
import { AuthContext } from '../../AuthContext';

const RestaurantFavorites = () => {
  const { userId } = useContext(AuthContext);
  const [favoriteRestaurants, setFavoriteRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  useEffect(() => {
    if (userId) {
      fetchFavoriteRestaurants();
    }
  }, [userId]);

  const fetchFavoriteRestaurants = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/users/${userId}/favoritos`);
      setFavoriteRestaurants(response.data);
    } catch (error) {
      console.error('Error fetching favorite restaurants:', error);
    }
  };

  const handleViewMore = (restaurant) => {
    setSelectedRestaurant(restaurant);
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
      {favoriteRestaurants.length > 0 ? (
        <div className="restaurant-favorites-list">
          {favoriteRestaurants.map((restaurant, index) => (
            <RestaurantCard
            key={index}
            name={restaurant}
            />
          ))}
        </div>
      ) : (
        <p>No tienes restaurantes favoritos.</p>
      )}
      {selectedRestaurant && (
        <div className="restaurant-details">
          {/* Mostrar información completa del restaurante */}
          <h2>{selectedRestaurant.nombre}</h2>
          <p>{selectedRestaurant.description}</p>
          {/* ... otras opciones y funcionalidades */}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default RestaurantFavorites;