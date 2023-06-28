import React, { useState, useEffect ,useContext} from 'react';
import axios from 'axios';
import Modal from 'react-modal'; // Importa el componente Modal de react-modal
import '../../styles/Restaurant/RestaurantPage.css';
import RestaurantCard from './RestaurantCard';
import RestaurantCardDetails from './RestaurantCardDetails';
import { AuthContext } from '../../AuthContext.js'; // Importa el contexto de autenticación

Modal.setAppElement('#root'); // Asegura que el elemento de la aplicación principal esté definido

const RestaurantPage = () => {
const { restaurants, updateRestaurants } = useContext(AuthContext); // Obtén las propiedades restaurants y updateRestaurants del contexto
const [selectedRestaurant, setSelectedRestaurant] = useState(null);

const handleViewMore = (restaurant) => {
  setSelectedRestaurant(restaurant);
};
const handleCloseDetails = () => {
  setSelectedRestaurant(null);
};
useEffect(() => {
  const fetchRestaurants = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/restaurantes/all');
      const data = response.data;
      if (Array.isArray(data.restaurantes)) {
        updateRestaurants(data.restaurantes); // Actualiza la lista de restaurantes en el contexto
      }
    } catch (error) {
      console.error('Error al obtener los restaurantes:', error);
    }
  };

  fetchRestaurants();
}, [updateRestaurants]);

  return (
    <div>
      <h1>Restaurantes</h1>
      <div className="restaurant-list">
        {Array.isArray(restaurants) &&
          restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.nit}
              name={restaurant.nombre}
              image={restaurant.urlImg}
              description={restaurant.description}
              direccion={restaurant.direccion}
              onViewMore={() => handleViewMore(restaurant)}
              updateRestaurants={updateRestaurants} // Pasa la función updateRestaurants al componente RestaurantCard
            />
          ))}
      </div>
      {selectedRestaurant && (
        <RestaurantCardDetails
          restaurant={selectedRestaurant}
          onClose={handleCloseDetails}
        />
      )}
    </div>
  );
};

export default RestaurantPage;