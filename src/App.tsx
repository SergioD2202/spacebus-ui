import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';

//Common imports
import Navbar from './components/shared/Navbar/Navbar';
import Footer from './components/shared/Footer/Footer';

//Page imports
import Home from './components/pages/Home/Home';
import Signup from './components/pages/Signup/Signup';
import Login from './components/pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/spacebus-ui/" element={<Home />} />
          <Route path="/spacebus-ui/sign-up" element={<Signup />} />
          <Route path="/spacebus-ui/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
