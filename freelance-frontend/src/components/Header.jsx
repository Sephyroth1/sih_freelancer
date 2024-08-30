import React from 'react';
import styles from "../components/header.module.css";
import { NavLink } from 'react-router-dom';

export default function Header(){
  return (
      <div className={styles.header}>
        <div>Icon</div>
        <div>FreelanceConnect</div>
        <nav className={styles.container}>
          <NavLink to="/" className='home'>Home</NavLink>
          <NavLink to="/jobs" className='market'>marketplace</NavLink>
          <NavLink to="/login" className='login'>login</NavLink>
          <NavLink to="/profile" className='profile'>Profile</NavLink>
          <NavLink to="/mentorship" className='mentorship'>Mentorship</NavLink>
          <NavLink to="/learning">Learning</NavLink>
        </nav>
      </div>
  );
}
