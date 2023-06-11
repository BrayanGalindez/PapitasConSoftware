import React, { useState } from 'react';
import '../../styles/Home/Home.css';
import TopBar from './TopBar.jsx';
import Footer from './Footer.jsx';
import Filter from './Filter.jsx';
import RestaurantCardList from '../Restaurant/RestaurantPage';
import CreateRestaurant from './CreateRestaurant.jsx';

const HomePage = () => {
  const [showCreateRestaurant, setShowCreateRestaurant] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleOpenCreateRestaurant = () => {
    setShowCreateRestaurant(true);
  };

  const handleCloseCreateRestaurant = () => {
    setShowCreateRestaurant(false);
  };

  return (
    <div className='home-page'>
      <TopBar showSearch={true} />
      <div className='row'>
        <Filter />
        <div className='restaurants'>
          <h1>Featured restaurants</h1>
          <RestaurantCardList />
          {isLoggedIn && (
            <button className='floating-button' onClick={handleOpenCreateRestaurant}>
              +
            </button>
          )}
        </div>
      </div>
      <Footer />
      <CreateRestaurant isOpen={showCreateRestaurant} onClose={handleCloseCreateRestaurant} />
    </div>
  );
};

export default HomePage;