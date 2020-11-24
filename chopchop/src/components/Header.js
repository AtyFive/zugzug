import React from 'react';
import '../App.css';
import NavBar from './NavBar';
import Logo from '../images/new_kakadoon.jpg';

export default function Header() {
 
  return (
    <div className = 'app_header'>
        
        <img className = 'app__logo' src = {Logo} alt = 'KAKADOON' />
        <NavBar />
        <p className = 'header__login'>One day you'll login here</p>
    </div>
  );
}
