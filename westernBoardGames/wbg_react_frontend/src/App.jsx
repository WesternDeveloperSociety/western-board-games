import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* If user goes to "/", show Checkout directly for now */}
        <Route path="/" element={<Checkout />} />
        {/* Also keep the /checkout path working */}
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;