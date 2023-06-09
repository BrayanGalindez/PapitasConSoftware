import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from '../../utils/logo.jpg';
import { AuthContext } from '../../AuthContext';
import '../../styles/Home/TopBar.css';
import Search from '../Home/Search';
import UserAccount from '../User/UserAccount';
import RestaurantFavorites from '../Home/RestaurantFavorites';

function TopBar() {
  const [query, setQuery] = useState('');
  const { isLoggedIn, handleLogout } = useContext(AuthContext);

  const handleSearch = async () => {
    try {
      const response = await axios.get('URL_DE_TU_API/restaurantes', {
        params: { query }
      });
      const restaurantes = response.data; // Suponiendo que la respuesta contiene un arreglo de objetos de restaurantes
      // Actualizar el estado o realizar cualquier otra acción con los resultados de la búsqueda
      console.log(restaurantes);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="top-bar">
      <nav className="topbar">
        <div className="logo">
        <Link to="/inicio">
          <img src={logo} alt="Logo" className="logo" />
        </Link>

        </div>
        <div className="searchbar"> {/* Add a separate container for the searchbar */}
          <div className="search-container">
            <Search /> {/* Move the Search component inside the search-container */}
          </div>
        </div>
        <div className="botones">
          {isLoggedIn ? (
            <>
              <Link to="/favoritos">
                <button
                  className="btn btn-outline btn-favorites"
                >
                  Favoritos
                </button>
              </Link>
              <Link to="/cuenta">
                <button
                  className="btn btn-outline btn-account"
                >
                  Cuenta
                </button>
              </Link>
              <UserAccount />
              <RestaurantFavorites />
            </>
          ) : (
            <>
              <Link to="/iniciar">
                <button
                  className="btn btn-outline btn-login"
                >
                  Iniciar sesión
                </button>
              </Link>
              <Link to="/registrar">
                <button
                  className="btn btn-contained btn-register"
                >
                  Registrarse
                </button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}

export default TopBar;