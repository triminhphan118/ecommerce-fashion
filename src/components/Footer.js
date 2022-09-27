import React from 'react';
import { Link } from 'react-router-dom';
import Grid from './Grid';
import logo from '../assets/images/Logo-2.png';

const footerLinks = [
  {
    display: 'Introduce',
    path: '/intro',
  },
  {
    display: 'Contact',
    path: '/contact',
  },
  {
    display: 'Recruit',
    path: '/recruit',
  },
  {
    display: 'News',
    path: '/news',
  },
  {
    display: 'Store',
    path: '/store',
  },
];

const customerLinks = [
  {
    display: 'Return Policy',
    path: '/return',
  },
  {
    display: 'Warranty Policy',
    path: '/warranty',
  },
  {
    display: 'Refund Policy',
    path: '/refund',
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Grid col={4} mdCol={1} smCol={1} gap={20}>
          <div className="footer__item">
            <div className="footer__item__title">Support</div>
            <ul className="footer__item__content">
              <li>
                Order Contact: <strong>0334202221</strong>
              </li>
              <li>
                Order Inquiries: <strong>0334202221</strong>
              </li>
              <li>
                Contributions, Complaints: <strong>0334202221</strong>
              </li>
            </ul>
          </div>
          <div className="footer__item">
            <div className="footer__item__title">About Yolo</div>
            <ul className="footer__item__content">
              {footerLinks.map((link, index) => {
                return (
                  <li key={index}>
                    <Link to={link.path}>
                      <p>{link.display}</p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="footer__item">
            <div className="footer__item__title">Support</div>
            <ul className="footer__item__content">
              {customerLinks.map((link, index) => {
                return (
                  <li key={index}>
                    <Link to={link.path}>
                      <p>{link.display}</p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="footer__item">
            <div className="footer__logo">
              <img src={logo} alt="lo-go" />
            </div>

            <p className="footer__desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
              consequatur tenetur labore in repellendus soluta natus repellat,
              sit quis voluptatum, voluptates quisquam facere id dolorem. Ab,
              maiores nemo? Quisquam, distinctio!
            </p>
          </div>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
