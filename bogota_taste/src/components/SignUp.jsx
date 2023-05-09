import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SignUp.css';

const SignUp = () => {
  return (
    <div className="form-container">
      <h2>Crear cuenta</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirmar contraseña</label>
          <input type="password" id="confirm-password" name="confirm-password" />
        </div>
        <button type="submit">Crear cuenta</button>
      </form>
      <p>¿Ya tienes una cuenta? <Link to="/signin">Inicia sesión aquí</Link></p>
    </div>
  );
};

export default SignUp;