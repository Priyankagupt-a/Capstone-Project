// component/Navbar/Navbar.tsx
import React from 'react';
import { useCart } from '../context/CartContext';
import './navbar.css';

const Navbar: React.FC = () => {
  const { cart } = useCart(); // Get cart from context

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img
          src="https://i.pinimg.com/564x/1c/3d/62/1c3d628660fa47b9449d364eda8bd285.jpg"
          alt="WittyCorp Logo"
        />
      </div>
      <ul className="navbar__menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="navbar__actions">
        {/* Cart icon with item count */}
        <div className="navbar__cart">
          <img
            src="https://www.princesshouse.com/en-US/assets/images/header/SHOPPING_BAG.svg"
            alt="Cart Icon"
            className="navbar__cart-icon"
          />
          {cart.length > 0 && <span className="navbar__cart-count">{cart.length}</span>}
        </div>
        <button className="btn btn--login">Login</button>
        <button className="btn btn--signup">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;