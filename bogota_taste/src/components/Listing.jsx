import { useState } from "react";
import '../styles/Listing.css';
function RestaurantCard(props) {
  const [isFavorite, setIsFavorite] = useState(false);

  function handleFavoriteClick() {
    setIsFavorite(!isFavorite);
  }

  function handleViewReviewsClick() {
    // navigate to reviews page
  }

  function handleShowMenuClick() {
    // navigate to menu page
  }

  function handleAddReviewClick() {
    // navigate to add review page
  }

  return (
    <div className="restaurant-card">
      <h2>{props.name}</h2>
      <p>{props.address}</p>
      {/* map section goes here */}
      <div className="price">
        {props.price === "very expensive" && (
          <img src="very-expensive-icon.png" alt="very expensive" />
        )}
        {props.price === "expensive" && (
          <img src="expensive-icon.png" alt="expensive" />
        )}
        {props.price === "cheap" && (
          <img src="cheap-icon.png" alt="cheap" />
        )}
      </div>
      <div className="rating">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={index < props.rating ? "star-filled" : "star-empty"}
          >
            ★
          </span>
        ))}
      </div>
      <div className="flavor">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={index < props.flavor ? "fork-filled" : "fork-empty"}
          >
            🍴
          </span>
        ))}
      </div>
      {/* photo section goes here */}
      <div className="buttons">
        <button onClick={handleFavoriteClick}>
          {isFavorite ? "❤️" : "🤍"}
        </button>
        <button onClick={handleViewReviewsClick}>View reviews</button>
        <button onClick={handleShowMenuClick}>Show menu</button>
        <button onClick={handleAddReviewClick}>Add review</button>
      </div>
      <p className="description">{props.description}</p>
      <p className="contact">{props.contact}</p>
    </div>
  );
  
}
export default RestaurantCard;