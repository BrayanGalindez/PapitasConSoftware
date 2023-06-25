import React, { useState, useContext } from 'react';
import axios from 'axios';
import '../../styles/Home/CreateRestaurant.css'; // Ruta al archivo CSS

import Modal from 'react-modal';
import { AuthContext } from '../../AuthContext.js'; // Importa el contexto de autenticación

const CreateRestaurant = ({ isOpen, onClose }) => {
  const { isAuthenticated } = useContext(AuthContext); // Accede al estado de autenticación del contexto

  const [name, setName] = useState('');
  const [urlImg, seturlImg] = useState('');
  const [address, setAddress] = useState('');

  const generateRandomId = () => {
    // Genera un número aleatorio entre 1000 y 9999
    return Math.floor(1000 + Math.random() * 9000);
  };

  const handleCreateRestaurant = async (event) => {
    event.preventDefault();

    const nit = generateRandomId(); // Genera el ID (NIT) aleatorio

    try {
      const response = await axios.post('http://127.0.0.1:8000/restaurantes/', {
        nit,
        nombre: name,
        urlImg: urlImg
      });

      console.log('Restaurant created:', response.data);
      // Handle success or navigation to a different page
    } catch (error) {
      console.error('Error creating restaurant:', error);
      // Handle error
    }
  };

  // const handlePlaceSelect = (place) => {
  //   setAddress(place.formatted_address);
  // };
  const handlePhotoChange = (event) => {
    const files = Array.from(event.target.files);
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg']; // Permite los tipos de archivos seleccionados
    const selectedPhotos = [];
  
    const previewContainer = document.getElementById('preview-container');
    previewContainer.innerHTML = ''; // Limpiar el contenedor de vista previa
  
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileType = file.type;
      const fileName = file.name;
      const fileExtension = fileName.split('.').pop().toLowerCase();
      const isValidType = allowedTypes.includes(fileType);
      const isValidExtension = allowedTypes.some((type) => type.split('/').pop() === fileExtension);
  
      if (isValidType && isValidExtension) {
        selectedPhotos.push(file);
  
        const reader = new FileReader();
        reader.onload = function (e) {
          // Crear un elemento de imagen para mostrar la vista previa
          const image = document.createElement('img');
          image.src = e.target.result;
          image.classList.add('preview-image');
  
          // Agregar la imagen al contenedor de vista previa
          previewContainer.appendChild(image);
        };
  
        reader.readAsDataURL(file); // Leer el archivo como una URL de datos
      }
    }
  
    seturlImg(selectedPhotos);
  };

  return (
    <Modal
      isOpen={isOpen && isAuthenticated} // Verifica si el usuario está autenticado antes de mostrar el componente
      onRequestClose={onClose}
      className="crear-restaurante-modal"
      overlayClassName="crear-restaurante-overlay"
    >
      <div className="create-restaurant-container">
        <h2 className="create-restaurant-title">Añadir restaurante</h2>
        <form className="create-restaurant-form" onSubmit={handleCreateRestaurant}>
          <div>
            <label className="create-restaurant-label">Nombre:</label>
            <input
              className="create-restaurant-input"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <label className="create-restaurant-label" >Fotos:</label>
            <div >
              <input
              className="create-restaurant-input"
              type="file"
              id="photos"
              multiple
              accept="image/png, image/jpeg, image/jpg"
              onChange={handlePhotoChange}
              
              />
            </div >
            <div id="preview-container"></div>
          </div>
          <div>
            <label className="create-restaurant-label" >Dirección:</label>
            <input
              className="create-restaurant-input"
              type="text"
              id="address-input"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
          </div>
          <button className="create-restaurant-button" type="submit">Crear Restaurante</button>
        </form>
      </div>
    </Modal>
  );
};

export default CreateRestaurant;