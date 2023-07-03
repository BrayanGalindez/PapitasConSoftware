import React from 'react';
import '../../styles/Restaurant/RestaurantCard.css';

const RestaurantCard = ({ name, image, description, direccion, onViewMore,onAddFavorite,updateRestaurants }) => {
  return (
    <div className="restaurant-card">
      <img className='restaurant-card-image' src={image} alt={name} />
      <h3 className='restaurant-card-name'>{name}</h3>
      <p className='restaurant-card-description'>{description}</p>
      <h3 className='restaurant-card-direccion'>{direccion}</h3>
      <div className="restaurant-card-buttons">
        <button className='restaurant-card-button-more' onClick={onViewMore}>Ver más</button>
        <button className='restaurant-card-button-favorite' onClick={onAddFavorite}>Favorito</button>
      </div>
      
    </div>
  );
};

export default RestaurantCard;

