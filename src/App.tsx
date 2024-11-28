import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import { CartProvider } from './component/context/CartContext';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
// import { CartProvider } from './component/context/CartContext';
import CartPage from './pages/CartPage';
import { CartProvider } from './component/context/CartContext';

function App() {
  return (
    <CartProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </Router>
  </CartProvider>
  );
}

export default App;