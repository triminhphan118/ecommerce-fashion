import React, { useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '../assets/images/Logo-2.png';

const navs = [
  {
    display: 'Home',
    path: '',
  },
  {
    display: 'Product',
    path: '/product',
  },
  {
    display: 'Accessories',
    path: '/accessories',
  },
  {
    display: 'Contact',
    path: '/contact',
  },
];

const Header = () => {
  const header = useRef({});
  const menu = useRef({});

  const toggleMenu = () => {
    if (menu.current) {
      menu.current.classList.toggle('active');
    }
  };

  // header scroll
  useEffect(() => {
    const scrollHeader = (e) => {
      if (window.scrollY > 0 && window.scrollY > 100) {
        header.current.classList.add('shinrk');
      } else {
        header.current.classList.remove('shinrk');
      }
    };
    window.addEventListener('scroll', scrollHeader);

    return () => {
      window.removeEventListener('scroll', scrollHeader);
    };
  }, []);
  return (
    <header className="header" ref={header}>
      <div className="container">
        <div className="header__logo">
          <Link to={'/'}>
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="header__menu">
          <div className="header__menu__mobile__toggle" onClick={toggleMenu}>
            <i className="bx bx-menu"></i>
          </div>
          <div className="header__menu__left" ref={menu}>
            <div className="header__menu__mobile__close" onClick={toggleMenu}>
              <i className="bx bx-x"></i>
            </div>
            {navs.map((nav, index) => (
              <div
                className="header__menu__item header__menu__left__item"
                key={index}
                onClick={toggleMenu}
              >
                <NavLink
                  to={nav.path}
                  className={({ isActive }) => (isActive ? ' active' : '')}
                  end={index === 0 ? true : false}
                >
                  <span>{nav.display}</span>
                </NavLink>
              </div>
            ))}
          </div>

          <div className="header__menu__right">
            <div className="header__menu__item header__menu__right__item color-orange">
              <Link to={'/search'}>
                <i className="bx bx-search"></i>
              </Link>
            </div>
            <div className="header__menu__item header__menu__right__item color-blue">
              <Link to={'/cart'}>
                <i className="bx bx-shopping-bag"></i>
              </Link>
            </div>
            <div className="header__menu__item header__menu__right__item color-pink">
              <Link to={'/user'}>
                <i className="bx bx-user"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
