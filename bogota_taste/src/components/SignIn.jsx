import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SignIn.css';

const SignIn = () => {
  return (
    <div className="form-container">
      <h2>Iniciar sesión</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
      <p>¿No tienes una cuenta? <Link to="/registrar">Regístrate aquí</Link></p>
    </div>
  );
};

export default SignIn;