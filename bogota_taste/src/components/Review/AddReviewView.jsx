import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/Review/AddReviewView.css';

const AddReviewView = ({ restaurantId, onClose, onAddReview }) => {
  const [opinion, setOpinion] = useState('');
  const [photos, setPhotos] = useState([]);
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

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
  
    setPhotos(selectedPhotos);
  };
  

  const handleAddReview = async () => {
    const formData = new FormData();
    formData.append('opinion', opinion);
    photos.forEach((photo) => formData.append('photos', photo));
    formData.append('rating', rating);

    try {
      await axios.post(`/api/restaurants/${restaurantId}/reviews`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Clear the form inputs and call the callback function to update the reviews
      setOpinion('');
      setPhotos([]);
      setRating(0);
      onAddReview();
    } catch (error) {
      console.error('Error adding review:', error);
    }
  };

  return (
    <div className="add-review-overlay">
      <div className="add-review-view">
        <h2>Añadir Reseña</h2>
        <form>
          <div className="form-group">
            <label htmlFor="opinion">Opinion:</label>
            <textarea
              id="opinion"
              value={opinion}
              onChange={(event) => setOpinion(event.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label>Fotos:</label>
            <div className="file-input-wrapper file-input-wrapper-reseña">
              <input
              type="file"
              id="photos"
              multiple
              accept="image/png, image/jpeg, image/jpg"
              onChange={handlePhotoChange}
              
              />
            </div >
            <div id="preview-container"></div>
          </div>
          <div className="form-group">
            <label htmlFor="rating">Calificacion:</label>
            <div className="rating-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`star ${star <= rating ? 'active' : ''}`}
                  onClick={() => handleRatingChange(star)}
                >
                  &#9733;
                </span>
              ))}
            </div>
          </div>
          <div className="form-group">
            <button type="button" onClick={handleAddReview}>
              Añadir
            </button>
            <button type="button" onClick={onClose}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReviewView;