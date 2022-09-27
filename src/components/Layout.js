import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from '../routes/Router';
import Footer from './Footer';
import Header from './Header';
import Modal from './Modal';

const Layout = () => {
  return (
    <>
      <BrowserRouter>
        <div className="wrapper">
          <Header></Header>
          <div className="container">
            <div className="main">
              <Router></Router>
            </div>
          </div>
          <Footer></Footer>
          <Modal />
        </div>
      </BrowserRouter>
    </>
  );
};

export default Layout;
