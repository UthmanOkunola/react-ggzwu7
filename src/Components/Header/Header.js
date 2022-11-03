import React from 'react';
import { Wrapper } from './style';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Wrapper>
      <nav className="navbar">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar nav-list">
            <li className="nav-item">
              <Link to="/"> Home </Link>
            </li>
            <li className="nav-item">
              <Link to="/Contact"> Contact </Link>
            </li>
            <li className="nav-item">
              <Link to="/AboutUs"> About </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Wrapper>
  );
}
