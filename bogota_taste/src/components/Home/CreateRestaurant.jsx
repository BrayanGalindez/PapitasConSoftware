import React, { useState, useContext } from 'react';
import axios from 'axios';
import '../../styles/Home/CreateRestaurant.css';
import Modal from 'react-modal';
import { AuthContext } from '../../AuthContext.js';

const CreateRestaurant = ({ isOpen, onClose }) => {
  const { isAuthenticated, updateRestaurants } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const handlePhotoChange = (event) => {
    const files = Array.from(event.target.files);
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
    const selectedPhotos = [];
  
    const previewContainer = document.getElementById('preview-container');
    previewContainer.innerHTML = '';
  
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
          const image = document.createElement('img');
          image.src = e.target.result;
          image.classList.add('preview-image-restaurant');
  
          previewContainer.appendChild(image);
        };
        reader.readAsDataURL(file);
      }
    }
    setSelectedFile(selectedPhotos[0]); // Asignar el primer archivo seleccionado como selectedFile
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
  
      const response = await axios.post('http://localhost:8000/restaurantes/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      const url = response.data.url;
      setImageUrl(url);
      console.log(url);
    } catch (error) {
      console.error('Error uploading image:', error);
      // Handle error
    }
  };

  const handleCreateRestaurant = async (event) => {
    event.preventDefault();
    const generateRandomId = () => {
      return Math.floor(1000 + Math.random() * 9000);
    };
  
    if (!imageUrl) {
      console.error('Error creating restaurant: No image URL');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:8000/restaurantes/', {
        nit: generateRandomId(),
        nombre: name,
        direccion: address,
        urlImg: imageUrl
      });
  
      console.log('Restaurant created:', response.data);
      updateRestaurants(response.data.restaurantes);
      onClose();
    } catch (error) {
      console.error('Error creating restaurant:', error);
      // Handle error
    }
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
              name="file"
              multiple
              accept="image/png, image/jpeg, image/jpg"
              onChange={handlePhotoChange}
              />
              <button className="create-restaurant-button" onClick={() => handleUpload()}>Cargar Imagen</button>
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