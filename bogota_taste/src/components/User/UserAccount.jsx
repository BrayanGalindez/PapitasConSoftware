import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/User/UserAccount.css';
import TopBar from '../Home/TopBar';
import Footer from '../Home/Footer';
import UserData from '../User/UserData';
import { useParams } from "react-router-dom";



const UserAccount = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");

  useEffect(() => {
    // Fetch user data from the API
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/users/${id}`);
        setUserData(response.data);
        setNombre(userData.nombre);
        console.log(nombre)
        setCorreo(userData.correo);
        setTelefono(userData.telefono);
        setDireccion(userData.direccion);

      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [id]);

  return (
    <div>
      <TopBar showSearch={false} />
      <div className="user-account-container">
      <h2>{nombre}</h2>
      <p>Email: {correo}</p>
      <p>Dirección: {direccion}</p>
      <p>Teléfono: {telefono}</p>
      </div>
      <Footer />
    </div>
  );
};

export default UserAccount;