import React, { useState, createContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const storedToken = localStorage.getItem('tokenLocal');
  const storedUserId = localStorage.getItem('userIdLocal');
  const [isAuthenticated, setIsAuthenticated] = useState(Boolean(storedToken));
  const [restaurants, setRestaurants] = useState([]);
  
  const handleAuth = () => {
    setIsAuthenticated(true);
    localStorage.setItem('tokenLocal', storedToken);
    localStorage.setItem('userIdLocal', storedUserId);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('tokenLocal');
    localStorage.removeItem('userIdLocal');
  };

  const updateRestaurants = (newRestaurants) => {
    setRestaurants(newRestaurants);
  };

  return (
    <AuthContext.Provider
      value={{
        storedUserId,
        isAuthenticated,
        handleAuth,
        handleLogout,
        restaurants,
        updateRestaurants,
        setToken: (token) => {
          localStorage.setItem('tokenLocal', token);
        },
        setUserId: (userId) => {
          localStorage.setItem('userIdLocal', userId);
        }
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};