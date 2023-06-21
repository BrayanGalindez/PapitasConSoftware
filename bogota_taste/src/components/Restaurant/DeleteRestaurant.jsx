import React from 'react';
import axios from 'axios';
import '../../styles/Restaurant/DeleteRestaurant.css';

const DeleteRestaurant = ({ restaurantId }) => {
  const handleDeleteRestaurant = async () => {
    try {
      const response = await axios.delete(`/api/restaurants/${restaurantId}`);
      console.log('Restaurant deleted:', response.data);
      // Handle success or navigation to a different page
    } catch (error) {
      console.error('Error deleting restaurant:', error);
      // Handle error
    }
  };

  return (
    <div className="delete-restaurant">
      <button className="delete-restaurant-btn" onClick={handleDeleteRestaurant}>
        Eliminar
      </button>
    </div>
  );
};

export default DeleteRestaurant;