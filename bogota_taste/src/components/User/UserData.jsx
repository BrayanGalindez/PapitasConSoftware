import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {useNavigate  } from "react-router-dom";
import '../../styles/User/UserData.css';
import RestaurantUser from './RestaurantUser.jsx';
import EditUserData from  './EditUserData.jsx';
import { AuthContext } from '../../AuthContext';
import DeleteAccountModal from './DeleteAccountModal';

const UserData = ({ data }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('');
  const [passw, setPassw] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const { storedUserId, handleLogout  } = useContext(AuthContext);
  const navigate = useNavigate (); // Obtener la instancia de history
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  
  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/users/${storedUserId}`);
        setName(response.data.nombre);
        setPassw(response.data.passw);
        setAddress(response.data.direccion);
        setEmail(response.data.correo);
        setPhone(response.data.telefono);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
  
    fetchUserData();
  }, [storedUserId ]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://127.0.0.1:8000/users/${storedUserId }`, {
        nombre: name,
        passw: passw ,
        direccion: address,
        correo: email,
        telefono: phone
      });
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };
  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await axios.delete(`http://127.0.0.1:8000/users/${storedUserId}`);
      handleLogoutAndRedirect();
    } catch (error) {
      console.error('Error deleting user account:', error);
    }
    setShowDeleteModal(false);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
  };

  const handleLogoutAndRedirect = () => {
    handleLogout();
    navigate('/inicio'); // Redirigir a la página principal ("/inicio")
  };

  return (
    <div>
      {isEditing ? (
        <EditUserData
        name={name}
        passw={passw}
        address={address}
        email={email}
        phone={phone}
        setName={setName}
        setAddress={setAddress}
        setEmail={setEmail}
        setPhone={setPhone}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        />
      ) : (
        <div className='profile-container'>
          <div className='profile-card'>    
            <h2 className='profile-title'>Perfil de Usuario</h2>
            <p className='profile-item'>Nombre: {name}</p>
            {/* <p className='profile-item'>Contraseña: {passw}</p> */}
            <p className='profile-item'>Direccion: {address}</p>
            <p className='profile-item'>Correo: {email}</p>
            <p className='profile-item'>Telefono: {phone}</p>
            <button className='profile-button-edit' onClick={handleEdit}>Editar</button>
            <button className='profile-button-delete' onClick={handleDelete}>Eliminar</button>
            {showDeleteModal && (
              <DeleteAccountModal
                handleConfirmDelete={handleConfirmDelete}
                handleCancelDelete={handleCancelDelete}
              />
            )}
          </div>
        </div>
      )}
      {data && data.restaurants && (
        <div>
          <h3>Añadir restaurantes:</h3>
          <ul>
            {data.restaurants.map((restaurant) => (
              <RestaurantUser key={restaurant.id} restaurant={restaurant} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserData;