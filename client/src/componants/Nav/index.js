import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Nav() {
  return (
    <nav>
      <ul className="ul-nav">
        <Link to="/" className="link-nav">
          <li>الصفحة الرئيسية</li>
        </Link>
        <Link to="/NewMember" className="link-nav">
          <li>أضافة عضو</li>
        </Link>
        <Link to="/FileUpload" className="link-nav">
          <li> أضافة أعضاء </li>
        </Link>
        <Link to="/AboutUs" className="link-nav">
          <li>حول النقابة</li>
        </Link>
        <Link to="/ConectUs" className="link-nav">
          <li>أتصل بنا</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
