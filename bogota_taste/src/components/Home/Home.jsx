import React, {useState, useContext  } from 'react';
import '../../styles/Home/Home.css';
import TopBar from './TopBar.jsx';
import Footer from './Footer.jsx';
import Filter from './Filter.jsx';
import RestaurantPage from '../Restaurant/RestaurantPage';
import CreateRestaurant from './CreateRestaurant.jsx';
import { AuthContext } from '../../AuthContext.js'; 

const HomePage = () => {
  const { isAuthenticated } = useContext(AuthContext)
  const [showCreateRestaurant, setShowCreateRestaurant] = useState(false);

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
          <RestaurantPage />
          {isAuthenticated && (
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