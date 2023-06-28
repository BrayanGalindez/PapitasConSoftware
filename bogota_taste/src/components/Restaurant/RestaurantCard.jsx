import React from 'react';
import '../../styles/Restaurant/RestaurantCard.css';

const RestaurantCard = ({ name, image, description, direccion, onViewMore, updateRestaurants }) => {
  return (
    <div className="restaurant-card">
      <img className='restaurant-card__image' src={image} alt={name} />
      <h3 className='restaurant-card__name'>{name}</h3>
      <p className='restaurant-card__description'>{description}</p>
      <h3 className='restaurant-card__direccion'>{direccion}</h3>
      <button className='restaurant-card__button' onClick={onViewMore}>Ver más</button>
    </div>
  );
};

export default RestaurantCard;

