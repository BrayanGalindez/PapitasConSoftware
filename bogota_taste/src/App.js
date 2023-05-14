import React from 'react';
import SignUp from './components/SignUp'; 
import SignIn from './components/SignIn';
import RestaurantCard from './components/Listing';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" >
          <Route path="iniciar" element={<SignIn/>}/>
          <Route path="registrar" element={<SignUp/>}/>
          <Route path="lista" element={<RestaurantCard/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;