import React, { useState, useEffect } from 'react'
import styles from './styles/login.module.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

export default function Login() {
        const navigate = useNavigate();
        const icon =  <FontAwesomeIcon icon={faArrowLeft} size='2x' className={styles.icon} onClick={() => navigate("/")}/>;
        const [visible, setVisible] = useState('');

        const handleclick = (section) => {
            setVisible(section);
        }
        return(
            <>
                {icon}
                <h1 className={styles.header}>Login  </h1>
                <div className={styles.con}>
                    <div className={styles.container}>
                    <div className={styles.tab_container}>
                        <button onClick={() => handleclick("intern")} className={styles.handleclick}>Intern login</button>
                        <button onClick={() => handleclick("client")} className={styles.handleclick}>Client login</button>
                        <button onClick={() => handleclick("freelancer")} className={styles.handleclick}>Freelancer Login</button>
                    </div>
                    {visible === "intern" ? (
                        <div className={styles.login}>
                            <h2 className={styles.login_header}>Intern Login</h2>
                            <form className={styles.login_form}>
                                <input type="email" placeholder="Enter your email" name="internemail" id="internemail" className={styles.email} required/>
                                <input type="password" placeholder='Enter your password' name="internpassword" id="internpassword" className={styles.password} required/>
                                <button type="submit" className={styles.but_submit} onClick={() => navigate("/")}>Login</button>
                            </form>
                            <NavLink to="/signup" className={styles.links}>Don't Have an Account?</NavLink>
                        </div>
                    ) : visible === "client" ? (
                    <section className={styles.login}>
                        <h2 className={styles.login_header}>Client Login</h2>
                        <form className={styles.login_form}>
                            <input type="email" placeholder="Enter your email" name="clientemail" id="clientemail" className={styles.email} required/>
                            <input type="password" placeholder='Enter your password' name="clientpassword" id="clientpassword" className={styles.password} required/>
                            <button type="submit" className={styles.but_submit} onClick={() => navigate("/")}>Login</button>
                        </form>
                        <NavLink to="/signup" className={styles.links}>Don't Have an Account?</NavLink>
                    </section>
                    ) : visible === "freelancer" ? (
                    <section className={styles.login}>
                        <h2 className={styles.login_header}>Freelancer Login</h2>
                        <form className={styles.login_form}>
                            <input type="email" placeholder="Enter your email" name="freelanceremail" id="freelanceremail" className={styles.email} required/>
                            <input type="password" placeholder='Enter your password' name="freelancerpassword" id="freelancerpassword" className={styles.password} required/>
                            <button type="submit" className={styles.but_submit} onClick={() => navigate("/")}>Login</button>
                        </form>
                        <NavLink to="/signup" className={styles.links}>Don't Have an Account?</NavLink>
                    </section>
                    ): (
                        <div></div>
                    )}
                    </div>
                </div>
            </>
    );
}