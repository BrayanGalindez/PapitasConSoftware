import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/Home/SignUp'; 
import SignIn from './components/Home/SignIn';
import RestaurantCard from './components/Restaurant/RestaurantCard';
import RestaurantQueryView from './components/Home/RestaurantQueryView';
import DeleteRestaurant from './components/Restaurant/DeleteRestaurant';
import EditRestaurant from './components/Restaurant/EditRestaurant';
import FavoritesView from './components/Home/RestaurantFavorites';
import AddReviewView from './components/Review/AddReviewView';
import HomePage2 from './components/Home/Home';
import UserAccount from './components/User/UserAccount';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" >
          <Route path="inicio" element={<HomePage2/>}/>
          <Route path="iniciar" element={<SignIn/>}/>
          <Route path="registrar" element={<SignUp/>}/>
          <Route path="lista" element={<RestaurantCard/>}/>
          <Route path="consultar" element={<RestaurantQueryView/>}/>
          <Route path="eliminar" element={<DeleteRestaurant/>}/>
          <Route path="editar" element={<EditRestaurant/>}/>
          <Route path="favoritos" element={<FavoritesView/>}/>
          <Route path="reseña" element={<AddReviewView/>}/>
          <Route path="cuenta" element={<UserAccount/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;