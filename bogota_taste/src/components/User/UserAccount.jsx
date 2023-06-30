import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import '../../styles/User/UserAccount.css';
import TopBar from '../Home/TopBar';
import Footer from '../Home/Footer';
import UserData from '../User/UserData';
import { AuthContext } from '../../AuthContext';


const UserAccount = () => {
  const { userId } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);

  /*useEffect(() => {
    // Fetch user data from the API
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/users/${userId}`);
        const data = response.data;
        console.log(data.id)
        if(data){
          setUserData(data)
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [userId]);*/

  useEffect(() => {
    // Realiza la solicitud GET al backend para obtener los datos del usuario
    fetch(`http://127.0.0.1:8000/users/${userId}`)
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.log(error));
  }, [userId]);

  const renderUserData = () => {
    if (userData) {
      const { nombre, direccion, correo, telefono } = userData;
      return (
        <div>
          <h2>Nombre: {nombre}</h2>
          <p>Dirección: {direccion}</p>
          <p>Correo: {correo}</p>
          <p>Teléfono: {telefono}</p>
        </div>
      );
    } else {
      return <div>Cargando datos del usuario...</div>;
    }
  };

  return (
    <div>
      <TopBar showSearch={false} />
      <div className="user-account-container">
        {renderUserData()}
      </div>
      <Footer />
    </div>
  );
};

export default UserAccount;