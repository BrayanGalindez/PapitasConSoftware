import React, { useState } from 'react';
import '../styles/RestaurantQueryView.css'; // Import CSS file for styling

const RestaurantQueryView = ({ restaurant }) => {
  const [showReviews, setShowReviews] = useState(false);

  const toggleReviews = () => {
    setShowReviews(!showReviews);
  };

  return (
    <div className="restaurant-query-view">
      <h1 className="restaurant-name">{restaurant.name}</h1>
      <div className="restaurant-photos">
        {restaurant.photos.map((photo, index) => (
          <img src={photo} alt={`Restaurant Photo ${index}`} key={index} />
        ))}
      </div>
      <p className="restaurant-description">{restaurant.description}</p>
      <p className="restaurant-location">{restaurant.location}</p>
      <div className="reviews-section">
        <button className="toggle-reviews-button" onClick={toggleReviews}>
          {showReviews ? 'Hide Reviews' : 'Show Reviews'}
        </button>
        {showReviews && (
          <ul className="reviews-list">
            {restaurant.reviews.map((review, index) => (
              <li className="review-item" key={index}>{review}</li>
            ))}
          </ul>
        )}
      </div>
      <button className="menu-button">See Restaurant Menu</button>
    </div>
  );
};

export default RestaurantQueryView;