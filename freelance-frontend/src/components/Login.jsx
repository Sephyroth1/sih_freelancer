import React from 'react'
import styles from './styles/login.module.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function Login() {
        const navigate = useNavigate();
        const icon =  <FontAwesomeIcon icon={faArrowLeft} size='2x' className={styles.icon} onClick={() => navigate("/")}/>;
        return(
        <div className={styles.container}>
            <h1>Login & Signup</h1>
            <form className={styles.login_form}>
                {icon}
                <input type="email" placeholder="Enter your email" name="email" id="email" className={styles.email} required/>
                <input type="password" placeholder='Enter your password' name="password" id="password" className={styles.password} required/>
                <button type="submit" className={styles.but_submit} onClick={() => navigate("/")}>Login</button>
            </form>
        </div>
    );
}