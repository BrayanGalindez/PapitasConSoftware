import React from 'react';
import '../../styles/Restaurant/RestaurantCard.css';

const RestaurantCard = ({ name }) => {
  return (
    <div className="restaurant-card">
      <h3>{name}</h3>
    </div>
  );
};

export default RestaurantCard;