import React from 'react';

const RestaurantCard = ({ name, image, description }) => {
  return (
    <div className="restaurant-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <button>Ver más</button>
    </div>
  );
};

export default RestaurantCard;