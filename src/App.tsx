import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.scss';

//Common imports
import Navbar from './components/shared/Navbar/Navbar';
import Footer from './components/shared/Footer/Footer';

//Page imports
import Home from './components/pages/Home/Home';
import Signup from './components/pages/Signup/Signup';
import Login from './components/pages/Login/Login';
import Profile from './components/pages/Profile/Profile';
import PurchasedTickets from './components/pages/PurchasedTickets/PurchasedTickets';
import PurchaseTicket from './components/pages/PurchaseTicket/PurchaseTicket';
import TicketAdmin from './components/pages/TicketAdmin/TicketAdmin';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/spacebus-ui/" element={<Home />} />
          <Route path="/spacebus-ui/sign-up" element={<Signup />} />
          <Route path="/spacebus-ui/login" element={<Login />} />
          <Route
            path="/spacebus-ui/profile"
            element={true ? <Profile /> : <Navigate to="/spacebus-ui/" />}
          />
          <Route
            path="/spacebus-ui/purchased-tickets"
            element={
              true ? <PurchasedTickets /> : <Navigate to="/spacebus-ui/" />
            }
          />
          <Route
            path="/spacebus-ui/purchase-ticket"
            element={
              true ? <PurchaseTicket /> : <Navigate to="/spacebus-ui/" />
            }
          />
          <Route
            path="/spacebus-ui/ticket-admin"
            element={true ? <TicketAdmin /> : <Navigate to="/spacebus-ui" />}
          />
          <Route
            path="/spacebus-ui/error"
            element={<div>Error in the page</div>}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
