import React from 'react';
import logo from './logo.svg';
import './App.css';

import Footer from './component/Footer/Footer';
import Home from './pages/Home';
import Navbar from './component/Navbar/Navbar';

function App() {
  const menuItems = ['Home', 'Services', 'About', 'Contact'];
  const footerLinks = ['Privacy', 'Terms', 'Sitemap'];
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
        <Home />
        <Footer  />
      </header>
    </div>
  );
}

export default App;
