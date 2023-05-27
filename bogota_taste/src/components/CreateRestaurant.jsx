import React, { useState} from 'react';
import axios from 'axios';
import '../styles/CreateRestaurant.css'; // Ruta al archivo CSS
import Modal from 'react-modal';
const CreateRestaurant = ({ isOpen, onClose }) => {
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

//   useEffect(() => {
//     const autoComplete = new window.google.maps.places.Autocomplete(
//       document.getElementById('address-input')
//     );

//     autoComplete.addListener('place_changed', () => {
//       const place = autoComplete.getPlace();
//       handlePlaceSelect(place);
//     });
//   }, []);

  return (
    <Modal
      isOpen={isOpen}
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