import React from 'react';
import axios from 'axios';
import '../../styles/User/RestaurantUser.css'

const RestaurantUser = ({ restaurant }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`/api/user/${restaurant.userId}/restaurants/${restaurant.id}`);
      // Aquí puedes agregar la lógica para actualizar la lista de restaurantes después de eliminar uno
    } catch (error) {
      console.error('Error deleting restaurant:', error);
    }
  };

  return (
    <div className="restaurant-card">
      <img src={restaurant.photo} alt={restaurant.name} />
      <h3>{restaurant.name}</h3>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default RestaurantUser;