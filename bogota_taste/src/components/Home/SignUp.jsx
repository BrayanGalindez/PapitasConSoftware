import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TopBar from './TopBar.jsx';
import Footer from './Footer.jsx';
import '../../styles/Home/SignUp.css';

const SignUp = () => {
  // Estado para almacenar los valores de los campos del formulario
  const [formData, setFormData] = useState({
    id: '',
    nombre: '',
    correo: '',
    passw: '',
  });

  // Manejador de cambios en los campos del formulario
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Manejador del envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Realizar la petición al backend utilizando Axios
    try {
      const response = await axios.post('http://127.0.0.1:8000/users', formData);
      // Manejar la respuesta del backend
      console.log(response.data);
      // Realizar cualquier otra acción necesaria
      navigate('/inicio');
    } catch (error) {
      // Manejar el error en caso de que ocurra
      console.log(error);
    }
  };

  return (
    <div>
      <TopBar showSearch={false} />
      <div className="signup-form-container">
        <h2 className="signup-form-title">Crear cuenta</h2>
        <form onSubmit={handleSubmit}>
          <div className="signup-form-group">
            <label htmlFor="id" className="signup-form-label">No. Identificacion</label>
            <input
              type="number"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleChange}
              className="signup-form-input"
            />
          </div>
          <div className="signup-form-group">
            <label htmlFor="nombre" className="signup-form-label">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="signup-form-input"
            />
          </div>
          <div className="signup-form-group">
            <label htmlFor="correo" className="signup-form-label">Correo electrónico</label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              className="signup-form-input"
            />
          </div>
          <div className="signup-form-group">
            <label htmlFor="password" className="signup-form-label">Contraseña</label>
            <input
              type="password"
              id="passw"
              name="passw"
              value={formData.passw}
              onChange={handleChange}
              className="signup-form-input"
            />
          </div>
          
          <button type="submit" className="signup-form-button">Crear cuenta</button>
        </form>
        <p className="signup-form-text">¿Ya tienes una cuenta? <Link to="/iniciar" className="signup-form-link">Inicia sesión aquí</Link></p>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;