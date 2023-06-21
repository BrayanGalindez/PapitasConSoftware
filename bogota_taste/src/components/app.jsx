import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoginPage from './LoginPage';
import RestaurantPage from './RestaurantPage';
//Codigo para despues, este ayudara al almacenar el token y refresacar la pagina no se pierdan los datos.
const App = () => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
    setLoading(false);
  }, []);

  const handleLogin = (newToken) => {
    setToken(newToken);
    localStorage.setItem('token', newToken);
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {token ? (
        <RestaurantPage token={token} onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;