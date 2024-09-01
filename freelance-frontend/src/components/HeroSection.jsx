import React from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './styles/herosection.module.css';


export default function HeroSection() {
    const navigate  = useNavigate();

    const handleClick = () => {
        navigate('/jobs');
    }
    console.log(styles);
    return(
        <section className={styles.hero}>
            <h1 className={styles.heading_hero}>Find you next Freelance Opportunity in India!</h1>
            <p className={styles.hero_paragraph}>Connecting Freelancer for short-term and project-based work regardless of where you are</p>
            <button onClick={handleClick} className={styles.action_button}>Browse Jobs Here</button>
        </section>
    )
}