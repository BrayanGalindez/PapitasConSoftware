import React from 'react';
import RestaurantCard from './RestaurantCard.jsx';

const RestaurantList = ({ restaurants }) => {
  return (
    <div className="restaurant-list">
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          name={restaurant.name}
          image={restaurant.image}
          description={restaurant.description}
        />
      ))}
    </div>
  );
};

export default RestaurantList;