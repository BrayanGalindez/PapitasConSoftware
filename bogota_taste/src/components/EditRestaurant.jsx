import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/EditRestaurant.css'; // Ruta al archivo CSS

const EditRestaurant = ({ restaurantId }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    fetchRestaurant();
  }, []);

  const fetchRestaurant = async () => {
    try {
      const response = await axios.get(`/api/restaurants/${restaurantId}`);
      const { name, description, address } = response.data;
      setName(name);
      setDescription(description);
      setAddress(address);
    } catch (error) {
      console.error('Error fetching restaurant:', error);
    }
  };

  const handleEditRestaurant = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(`/api/restaurants/${restaurantId}`, {
        name,
        description,
        address,
      });

      console.log('Restaurant updated:', response.data);
      // Handle success or navigation to a different page
    } catch (error) {
      console.error('Error updating restaurant:', error);
      // Handle error
    }
  };

  return (
    <div className="edit-restaurant-container">
      <h2>Editar restaurante</h2>
      <form onSubmit={handleEditRestaurant}>
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
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
        </div>
        <button type="submit">Actualizar Restaurante</button>
      </form>
    </div>
  );
};

export default EditRestaurant;