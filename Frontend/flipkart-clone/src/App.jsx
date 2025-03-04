// import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import SignUp from './Components/SignupPage'; // Ensure the path is correct
import LandingPage from './Utilities/LandingPage';




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<LandingPage />} />
       
       
      </Routes>
    </BrowserRouter>
  );
};

export default App;