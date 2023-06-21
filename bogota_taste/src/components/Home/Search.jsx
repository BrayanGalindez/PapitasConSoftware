import React, { useState } from "react";
import axios from "axios";
import Modal from "react-modal";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const handleSearch = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/restaurantes/", {
        params: {
          palabra_clave: keyword,
        },
      });

      setResults(response.data);
      setModalOpen(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input type="text" value={keyword} onChange={handleKeywordChange} />
        <button type="submit">Buscar</button>
      </form>

      <Modal isOpen={modalOpen} onRequestClose={closeModal} className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title">Resultados de búsqueda</h2>
            <button className="modal-close-btn" onClick={closeModal}>
              Cerrar
            </button>
          </div>
          <div className="modal-body">
            {results.length > 0 ? (
              <ul>
                {results.map((restaurante, index) => (
                  <li key={index}>{restaurante.nombre}</li>
                ))}
              </ul>
            ) : (
              <p>No se encontraron resultados.</p>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Search;
