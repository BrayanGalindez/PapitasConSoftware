import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../AuthContext";
import Search from "./Search";
import logo from "../../utils/logo.jpg";

const TopBar = ({ showSearch }) => {
  const [query, setQuery] = useState("");
  const { isAuthenticated, handleLogout } = useContext(AuthContext);

  const handleSearch = async () => {
    try {
      const response = await axios.get("URL_DE_TU_API/restaurantes", {
        params: { query },
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
    if (e.key === "Enter") {
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
        <div className="searchbar">
          {showSearch && (
            <div className="search-container">
              <Search
                value={query}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />
            </div>
          )}
        </div>
        <div className="botones">
          {isAuthenticated ? (
            <>
              <Link to="/favoritos">
                <button className="btn btn-outline btn-favorites">
                  Favoritos
                </button>
              </Link>
              <Link to="/cuenta">
                <button className="btn btn-outline btn-account">
                  Cuenta
                </button>
              </Link>
              <button className="btn btn-contained" onClick={handleLogout}>
                Cerrar sesión
              </button>
            </>
          ) : (
            <>
              <Link to="/iniciar">
                <button className="btn btn-outline btn-login">
                  Iniciar sesión
                </button>
              </Link>
              <Link to="/registrar">
                <button className="btn btn-contained btn-register">
                  Registrarse
                </button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default TopBar;