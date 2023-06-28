import React from 'react';
import '../../styles/Restaurant/RestaurantCardDetails.css';

const RestaurantCardDetails = ({ restaurant, onClose }) => {
    // Aquí puedes mostrar la información detallada del restaurante, incluyendo el mapa y las funcionalidades adicionales
    return (
      <div className="restaurant-details">
        {/* Mostrar información detallada del restaurante */}
        <h3>{restaurant.name}</h3>
        {/* Mostrar el mapa de Google Maps */}
        {/* Mostrar los botones adicionales, como "Añadir a favoritos", "Eliminar restaurante", etc. */}
        <button onClick={onClose}>Cerrar</button>
      </div>
    );
  };
export default RestaurantCardDetails;