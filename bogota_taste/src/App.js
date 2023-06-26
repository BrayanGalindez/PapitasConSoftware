import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import SignUp from './components/Home/SignUp'; 
import SignIn from './components/Home/SignIn';
import RestaurantCard from './components/Restaurant/RestaurantCard';
import DeleteRestaurant from './components/Restaurant/DeleteRestaurant';
import EditRestaurant from './components/Restaurant/EditRestaurant';
import RestaurantFavorites from './components/Home/RestaurantFavorites';
import AddReviewView from './components/Review/AddReviewView';
import HomePage from './components/Home/Home';
import UserAccount from './components/User/UserAccount';
import TopBar from './components/Home/TopBar';
import UserData from './components/User/UserData';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" >
            <Route path="inicio" element={<HomePage/>}/>
            <Route path="iniciar" element={<SignIn/>}/>
            <Route path="registrar" element={<SignUp/>}/>
            <Route path="lista" element={<RestaurantCard/>}/>
            <Route path="eliminar" element={<DeleteRestaurant/>}/>
            <Route path="editar" element={<EditRestaurant/>}/>
            <Route path="favoritos/:id" element={<RestaurantFavorites/>}/>
            <Route path="reseña" element={<AddReviewView/>}/>
            <Route path="cuenta/:id" element={<UserAccount/>}/>
            <Route path="barra" element={<TopBar/>}/>
            <Route path="datosCuenta" element={<UserData/>}/>
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;