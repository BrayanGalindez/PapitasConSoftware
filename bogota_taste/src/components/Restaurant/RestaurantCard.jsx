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
// import React from 'react';
// import axios from 'axios';

// const RestaurantCard = ({
//   name,
//   image,
//   description,
//   direccion,
//   onViewMore,
//   updateRestaurants // Recibe la función updateRestaurants como prop
// }) => {
//   const handleDeleteRestaurant = async () => {
//     try {
//       await axios.delete(`http://localhost:8000/restaurantes/${name}`);
//       updateRestaurants(); // Actualiza la lista de restaurantes después de eliminar un restaurante
//     } catch (error) {
//       console.error('Error deleting restaurant:', error);
//     }
//   };

//   const handleEditRestaurant = async () => {
//     // Lógica para editar un restaurante
//   };

//   return (
//     <div className="restaurant-card">
//       <img src={image} alt={name} />
//       <h3>{name}</h3>
//       <p>{description}</p>
//       <p>{direccion}</p>
//       <button onClick={onViewMore}>Ver más</button>
//       <button onClick={handleDeleteRestaurant}>Eliminar</button>
//       <button onClick={handleEditRestaurant}>Editar</button>
//     </div>
//   );
// };

// export default RestaurantCard;
