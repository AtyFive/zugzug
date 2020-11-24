import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
 
  return (
    <div className = 'navbar'>
        <ul className = 'navbar__list'>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/team'>Meet the Team</Link></li>
          <li><Link to='/games'>Kakadoon plays</Link></li>
          <li><Link to='/space'>Space Adventures</Link></li>
        </ul>
    </div>
  );
}
