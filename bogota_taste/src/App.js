import React from 'react';
import SignUp from './components/SignUp'; 
import SignIn from './components/SignIn';
import RestaurantCard from './components/RestaurantCard';
import RestaurantQueryView from './components/RestaurantQueryView';
import DeleteRestaurant from './components/DeleteRestaurant';
import EditRestaurant from './components/EditRestaurant';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import MiCuenta from './components/MiCuenta';
import FavoritesView from './components/FavoritesView';
import AddReviewView from './components/AddReviewView';
import HomePage2 from './components/Home';
import UserAccount from './components/UserAccount';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" >
          <Route path="inicio" element={<HomePage/>}/>
          <Route path="inicio2" element={<HomePage2/>}/>
          <Route path="iniciar" element={<SignIn/>}/>
          <Route path="registrar" element={<SignUp/>}/>
          <Route path="micuenta" element={<MiCuenta/>}/>
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