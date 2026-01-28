import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar';
import Profile from './pages/Profile';
import Team from './pages/Team';
import CatalogPage from './pages/CatalogPage';
import Home from './pages/home';
import Checkout from './pages/Checkout';
import Footer from './components/Footer';
import AdminDashboard from './pages/Admin';

function App() {
  return (
     <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/team" element={<Team />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/admin" element={<AdminDashboard />} />
          {/* <Route path="/signout" element={<SignOut />} /> */}
        </Routes>
        <Footer></Footer>
      </div>
    </Router>

  );
}

export default App;