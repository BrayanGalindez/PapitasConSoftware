import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/SignUp.css';

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
    <div className="form-container">
      <h2>Crear cuenta</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirmar contraseña</label>
          <input
            type="password"
            id="confirm-password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Crear cuenta</button>
      </form>
      <p>¿Ya tienes una cuenta? <Link to="/iniciar">Inicia sesión aquí</Link></p>
    </div>
  );
};

export default SignUp;