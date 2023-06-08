import React, { useState } from 'react';
import '../styles/HomePage/HomePage.css';
import TopBar from './TopBar.jsx';
import Footer from './Footer.jsx';
import Filter from './Filter.jsx';
import RestaurantCardList from './RestaurantCard.jsx';
import CreateRestaurant from './CreateRestaurant.jsx';

const HomePage = () => {
  const [showCreateRestaurant, setShowCreateRestaurant] = useState(false);

  const handleOpenCreateRestaurant = () => {
    setShowCreateRestaurant(true);
  };

  const handleCloseCreateRestaurant = () => {
    setShowCreateRestaurant(false);
  };

  return (
    <div className='home-page'>
      <TopBar />
      <div className='row'>
        <Filter />
        <div className='restaurantes'>
          <h1>Restaurantes destacados</h1>
          <RestaurantCardList />
          <button className='floating-button' onClick={handleOpenCreateRestaurant}>
            +
          </button>
        </div>
      </div>
      <Footer />
      <CreateRestaurant isOpen={showCreateRestaurant} onClose={handleCloseCreateRestaurant} />
    </div>
  );
};

export default HomePage;