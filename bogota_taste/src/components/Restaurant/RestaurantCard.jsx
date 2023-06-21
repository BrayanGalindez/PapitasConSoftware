import React from 'react';
import '../../styles/Restaurant/RestaurantCard.css';

const RestaurantCard = ({ name, image, description, direccion, onViewMore }) => {
  return (
    <div className="restaurant-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <h3>{direccion}</h3>
      <button onClick={onViewMore}>Ver más</button>
    </div>
  );
};

export default RestaurantCard;