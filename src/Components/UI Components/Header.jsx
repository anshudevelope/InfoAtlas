import React, { useState, useEffect, useRef } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const [show, setShow] = useState(false);
  const menuRef = useRef();
  const buttonRef = useRef();
  const location = useLocation(); // to detect route changes

  const handleButtonToggle = () => {
    setShow((prev) => !prev);
  };

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setShow(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close menu on route change
  useEffect(() => {
    setShow(false);
  }, [location.pathname]);

  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="Logo">
            <NavLink to="/">
              <h1>InfoAtlas</h1>
            </NavLink>
          </div>

          <nav
            ref={menuRef}
            className={show ? 'menu-mobile' : 'menu-web'}
          >
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/country">Country</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>

          <div className="ham-menu" ref={buttonRef}>
            <button onClick={handleButtonToggle}>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
