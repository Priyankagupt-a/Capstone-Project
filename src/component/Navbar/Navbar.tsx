import React from 'react';
import { useDropdown } from '../../Hooks/useDropdown';
import './navbar.css'


const Navbar: React.FC = () => {
  const homeDropdown = useDropdown()
  const servicesDropdown = useDropdown();

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="https://i.pinimg.com/564x/1c/3d/62/1c3d628660fa47b9449d364eda8bd285.jpg"/>
      </div>
      <ul className="navbar__menu">
        <li
          className="dropdown"
          onMouseEnter={homeDropdown.openDropdown}
          onMouseLeave={homeDropdown.closeDropdown}
        >
          <a href="#home">Home</a>
          {homeDropdown.isOpen && (
            <ul className="dropdown__menu">
              <li><a href="#home1">Submenu 1</a></li>
              <li><a href="#home2">Submenu 2</a></li>
              <li><a href="#home3">Submenu 3</a></li>
            </ul>
          )}
        </li>
        <li
          className="dropdown"
          onMouseEnter={servicesDropdown.openDropdown}
          onMouseLeave={servicesDropdown.closeDropdown}
        >
          <a href="#services">Services</a>
          {servicesDropdown.isOpen && (
            <ul className="dropdown__menu">
              <li><a href="#services1">Service 1</a></li>
              <li><a href="#services2">Service 2</a></li>
              <li><a href="#services3">Service 3</a></li>
            </ul>
          )}
        </li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="navbar__actions">
        <button className="btn btn--login">Login</button>
        <button className="btn btn--signup">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;