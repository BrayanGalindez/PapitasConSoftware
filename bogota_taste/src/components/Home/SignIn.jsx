import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../styles/Home/SignIn.css';
import { AuthContext } from '../../AuthContext';
import TopBar from './TopBar.jsx';
import Footer from './Footer.jsx';

const SignIn = () => {
  const navigate = useNavigate();
  const { handleAuth, setUserId } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/users/login', {
        correo: email,
        passw: password
      });

      console.log(response.data);

      const token = response.data.token;

      localStorage.setItem('token', token);

      handleAuth();

      const userResponse = await axios.get('http://127.0.0.1:8000/users/me', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const userId = userResponse.data.id;
      setUserId(userId);

      navigate('/inicio');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.detail) {
        setError(error.response.data.detail);
      } else {
        setError('A server error has occurred.');
        console.log(error);
      }
    }
  };

  return (
    <div>
      <TopBar showSearch={false} />
      <div className="custom-form-container">
        <h2 className="custom-form-title">Iniciar sesión</h2>
        {error && <p className="custom-error-message">{error}</p>}
        <form onSubmit={handleSignIn}>
          <div className="custom-form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="custom-form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="custom-form-button" type="submit">
            Iniciar sesión
          </button>
        </form>
        <p>
          ¿No tienes una cuenta? <Link to="/registrar">Regístrate aquí</Link>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;