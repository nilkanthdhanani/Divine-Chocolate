import React, { useState, useEffect, useRef } from 'react';
import './header.scss';
import { logo, menu } from '../../assets/images/png';
import { NavLink } from 'react-router-dom';
import Home from '../../assets/images/svg/home';
import Offer from '../../assets/images/svg/offer';
import Selling from '../../assets/images/svg/selling';
import Shope from '../../assets/images/svg/shope';
import Login from '../../assets/images/svg/login';

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const sidebarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (sidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.classList.add('sidebar-open');
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.classList.remove('sidebar-open');
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.classList.remove('sidebar-open');
    };
  }, [sidebarOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <header className={isScrolled ? 'scrolled' : ''}>
        <div className="containerH">
          <div className="header-div">
            <div className="header-div-logo">
              <NavLink to={"/"}>
                <img src={logo} alt="logo" />
              </NavLink>
            </div>
            <div className="header-div-ancer">
              <NavLink activeclassname='active' to={"/"}>Home</NavLink>
              <NavLink activeclassname='active' to={"/shop"}>Shop</NavLink>
              <NavLink activeclassname='active' to={"/offers"}>Offers</NavLink>
              <NavLink activeclassname='active' to={"/selling"}>Best Selling</NavLink>
            </div>
            <div className="header-div-last">
              <div className="header-button">
                <button>Log In</button>
              </div>
              <div className="header-div-menu" onClick={() => setSidebarOpen(true)}>
                <img src={menu} alt="menu" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`} ref={sidebarRef}>
        <div className="sidebar-content">
          {/* <div className="sidebar-content-close">
            <img onClick={() => setSidebarOpen(false)} src={close} alt="close" />
          </div> */}
          <div className="sidebar-content-head">
            <NavLink to={"/"}>
              <img src={logo} alt="logo" />
            </NavLink>
          </div>
          <div className="sidebar-content-list">
            <NavLink to={"/"}><Home />Home</NavLink>
            <NavLink to={"/shop"}><Shope />Shop</NavLink>
            <NavLink to={"/offers"}><Offer />Offers</NavLink>
            <NavLink to={"/selling"}><Selling />Best Selling</NavLink>
            <NavLink to={"/login"}><Login />Log In</NavLink>
          </div>
        </div>
      </div>
      {sidebarOpen && <div className="overlay" onClick={() => setSidebarOpen(false)} />}
    </div>
  );
}
