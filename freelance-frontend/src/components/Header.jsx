import React from 'react';
import styles from "../components/styles/header.module.css";
import { NavLink } from 'react-router-dom';

export default function Header(){
  return (
    <header className={styles.container}>
        <h1 className={styles.heading}>SkillFolio</h1>
        <nav className={styles.container}>
          <NavLink to="/" className={styles.home}>Home</NavLink>&nbsp;
          <NavLink to="/jobs" className={styles.market}>marketplace</NavLink>&nbsp;
          <NavLink to="/login" className={styles.login}>login</NavLink>&nbsp;
          <NavLink to="/profile" className={styles.profile}>Profile</NavLink>&nbsp;
          <NavLink to="/mentorship" className={styles.mentorship}>Mentorship</NavLink>&nbsp;
          <NavLink to="/learning" className={styles.learning}>Learning</NavLink>&nbsp;
        </nav>
  </header>
  );
}
