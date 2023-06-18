import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TopBar from './TopBar.jsx';
import Footer from './Footer.jsx';
import '../../styles/Home/SignUp.css';

const SignUp = () => {
  // Estado para almacenar los valores de los campos del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
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
      const response = await axios.post('/api/signup', formData);
      // Manejar la respuesta del backend
      console.log(response.data);
      // Realizar cualquier otra acción necesaria
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
            <label htmlFor="name" className="signup-form-label">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="signup-form-input"
            />
          </div>
          <div className="signup-form-group">
            <label htmlFor="email" className="signup-form-label">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="signup-form-input"
            />
          </div>
          <div className="signup-form-group">
            <label htmlFor="password" className="signup-form-label">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="signup-form-input"
            />
          </div>
          <div className="signup-form-group">
            <label htmlFor="confirm-password" className="signup-form-label">Confirmar contraseña</label>
            <input
              type="password"
              id="confirm-password"
              name="confirmPassword"
              value={formData.confirmPassword}
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