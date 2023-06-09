import React from 'react';
import '../../styles/Restaurant/RestaurantCard.css'
const RestaurantCard = ({ name, image, description }) => {
  return (
    <div className="restaurant-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>s
      <p>{description}</p>
      <button>Ver más</button>
    </div>
  );
};

export default RestaurantCard;