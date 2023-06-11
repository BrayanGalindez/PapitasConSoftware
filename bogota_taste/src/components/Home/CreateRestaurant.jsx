import React, { useState, useContext } from 'react';
import axios from 'axios';
import '../../styles/Home/CreateRestaurant.css'; // Ruta al archivo CSS

import Modal from 'react-modal';
import { AuthContext } from '../../AuthContext.js'; // Importa el contexto de autenticación

const CreateRestaurant = ({ isOpen, onClose }) => {
  const { authenticated } = useContext(AuthContext); // Accede al estado de autenticación del contexto

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');

  const handleCreateRestaurant = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/restaurants', {
        name,
        description,
        address,
      });

      console.log('Restaurant created:', response.data);
      // Handle success or navigation to a different page
    } catch (error) {
      console.error('Error creating restaurant:', error);
      // Handle error
    }
  };

  const handlePlaceSelect = (place) => {
    setAddress(place.formatted_address);
  };

  return (
    <Modal
      isOpen={isOpen && authenticated} // Verifica si el usuario está autenticado antes de mostrar el componente
      onRequestClose={onClose}
      className="crear-restaurante-modal"
      overlayClassName="crear-restaurante-overlay"
    >
      <div className="container">
        <h2>Añadir restaurante</h2>
        <form onSubmit={handleCreateRestaurant}>
          <div>
            <label>Nombre:</label>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <label>Descripción:</label>
            <input
              type="text"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
          <div>
            <label>Dirección:</label>
            <input
              type="text"
              id="address-input"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
          </div>
          <button type="submit">Crear Restaurante</button>
        </form>
      </div>
    </Modal>
  );
};

export default CreateRestaurant;