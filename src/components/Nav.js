import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

function Nav() {
  return (
    <div className='nav'>
      <Link to='/' className='nav-link'>
        Home
      </Link>
      <Link to='/about' className='nav-link'>
        About
      </Link>
    </div>
  );
}

export default Nav;
