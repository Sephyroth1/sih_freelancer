import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import styles from './styles/signup.module.css';

export default function Signup() {
    const navigate = useNavigate();
    const icon = <FontAwesomeIcon icon={faArrowLeft} size='2x' className={styles.icon} onClick={() => navigate("/")} />;
    const [visible, setVisible] = useState('');
    const [formData, setFormData] = useState({ email: '', password: '', role: '' });

    const handleClick = (section) => {
        setVisible(section);
        setFormData(prevData => ({
            ...prevData,
            role: section
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('http://localhost:5000/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (response.ok) {
            console.log("Your account has been created");
            // Optionally navigate or handle successful signup
            navigate("/");
        } else {
            console.error("Signup failed:", data.message);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            {icon}
            <h1 className={styles.header}>Signup</h1>
            <div className={styles.con}>
                <div className={styles.container}>
                    <div className={styles.tab_container}>
                        <button onClick={() => handleClick("intern")} className={styles.handleclick}>Intern Signup</button>
                        <button onClick={() => handleClick("client")} className={styles.handleclick}>Client Signup</button>
                        <button onClick={() => handleClick("freelancer")} className={styles.handleclick}>Freelancer Signup</button>
                    </div>
                    {visible === "intern" && (
                        <div className={styles.login}>
                            <h2 className={styles.login_header}>Intern Signup</h2>
                            <form className={styles.login_form} onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    name="email"
                                    className={styles.email}
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="password"
                                    placeholder='Enter your password'
                                    name="password"
                                    className={styles.password}
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                <button type="submit" className={styles.but_submit}>Signup</button>
                            </form>
                        </div>
                    )}
                    {visible === "client" && (
                        <section className={styles.login}>
                            <h2 className={styles.login_header}>Client Signup</h2>
                            <form className={styles.login_form} onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    name="email"
                                    className={styles.email}
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="password"
                                    placeholder='Enter your password'
                                    name="password"
                                    className={styles.password}
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                <button type="submit" className={styles.but_submit}>Signup</button>
                            </form>
                        </section>
                    )}
                    {visible === "freelancer" && (
                        <section className={styles.login}>
                            <h2 className={styles.login_header}>Freelancer Signup</h2>
                            <form className={styles.login_form} onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    name="email"
                                    className={styles.email}
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="password"
                                    placeholder='Enter your password'
                                    name="password"
                                    className={styles.password}
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                <button type="submit" className={styles.but_submit}>Signup</button>
                            </form>
                        </section>
                    )}
                </div>
            </div>
        </>
    );
}
