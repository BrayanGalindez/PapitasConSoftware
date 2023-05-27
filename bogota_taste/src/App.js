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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" >
          <Route path="inicio" element={<HomePage/>}/>
          <Route path="iniciar" element={<SignIn/>}/>
          <Route path="registrar" element={<SignUp/>}/>
          <Route path="micuenta" element={<MiCuenta/>}/>
          <Route path="lista" element={<RestaurantCard/>}/>
          <Route path="consultar" element={<RestaurantQueryView/>}/>
          <Route path="eliminar" element={<DeleteRestaurant/>}/>
          <Route path="editar" element={<EditRestaurant/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;