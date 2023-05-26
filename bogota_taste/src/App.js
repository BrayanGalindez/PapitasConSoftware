import React from 'react';
import SignUp from './components/SignUp'; 
import SignIn from './components/SignIn';
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

        </Route>
      </Routes>
    </div>
  );
}

export default App;