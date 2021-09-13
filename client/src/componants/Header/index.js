import React from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';
import logo from '../../images/logo.jpg';
import Nav from '../Nav';
import './style.css';

const Header = () => (
  <header className="main-header">
    <div>
      <img src={logo} alt="" className="logo-img" />
      <h1>نقابة التحاليل الطبية</h1>
    </div>
    <Nav />
    <button type="button">تسجيل الدخول</button>
  </header>
);

export default Header;
