import React from 'react';
import '../../styles/Restaurant/RestaurantCardFavorites.css';

const RestaurantCardFavorites = ({ name, image, description, direccion, onViewMore, updateRestaurants  }) => {
  return (
    <div className="restaurant-card-favorites">
      {/* <img className='restaurant-card-favorites-image' src={image} alt={name} /> */}
      <h3 className='restaurant-card-favorites-name'>{name}</h3>
      <p className='restaurant-card-favorites-description'>{description}</p>
      <h3 className='restaurant-card-favorites-direccion'>{direccion}</h3>
      <button className='restaurant-card-favorites-button' onClick={onViewMore}>Ver más</button>
    </div>
  );
};

export default RestaurantCardFavorites;