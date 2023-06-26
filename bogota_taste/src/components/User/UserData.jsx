import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import '../../styles/User/UserData.css';
import RestaurantUser from './RestaurantUser';
import EditUserData from  './EditUserData';
import { AuthContext } from '../../AuthContext';

const UserData = ({ data }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('');
  const [passw, setPassw] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const { storedUserId  } = useContext(AuthContext);
  
  
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
            <button className='profile-button' onClick={handleEdit}>Editar</button>
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