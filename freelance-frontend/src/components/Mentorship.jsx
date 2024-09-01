import React from 'react'
import styles from './styles/mentorship.module.css';

export default function Mentorship() {
    return(
    <div className={styles.heading_container}>
    <h1 className={styles.head}>Mentorship</h1>
    <div className={styles.container}>
        <div className={styles.profile}>
            <p className={styles.name}>Sanju</p>
            <p className={styles.other}>Skill: Web Developer</p>
            <p className={styles.other}>Years of Experience: 2 years</p>
            <p className={styles.other}>Location: Nellore</p>
        </div>
        <div className={styles.profile}>
            <p className={styles.name}>Venkatesh</p>
            <p className={styles.other}>Skill: Python Developer</p>
            <p className={styles.other}>Years of Experience: 4 years</p>
            <p className={styles.other}>Location: Hyderabad</p>
        </div>
        <div className={styles.profile}>
            <p className={styles.name}>Lalitha</p>
            <p className={styles.other}>Skill: Front End Developer</p>
            <p className={styles.other}>Years of Experience: Fresher</p>
            <p className={styles.other}>Location: Bangalore</p>
        </div>
        <div className={styles.profile}>
            <p className={styles.name}><strong>Bhanu</strong></p>
            <p className={styles.other}>Skill: Photography</p>
            <p className={styles.other}>Years of Experience: 6 years</p>
            <p className={styles.other}>Location: Kerala</p>
        </div>
        <div className={styles.profile}>
            <p className={styles.name}><strong>Charan</strong></p>
            <p className={styles.other}>Skill: Artist</p>
            <p className={styles.other}>Years of Experience: 6 years</p>
            <p className={styles.other}>Location: Chennai</p>
        </div>
        <div className={styles.profile}>
            <p className={styles.name}><strong>Vaishu</strong></p>
            <p className={styles.other}>Skill: Video Editor</p>
            <p className={styles.other}>Years of Experience: 2 years</p>
            <p className={styles.other}>Location: Karnataka</p>
        </div>
        <div className={styles.profile}>
            <p className={styles.name}><strong>Aswini</strong></p>
            <p className={styles.other}>Skill: Game Editor</p>
            <p className={styles.other}>Years of Experience: 1 year</p>
            <p className={styles.other}>Location: Guntur</p>
        </div>
        <div className={styles.profile}>
            <p className={styles.name}><strong>Manisha</strong></p>
            <p className={styles.other}>Skill: Java Developer</p>
            <p className={styles.other}>Years of Experience: 4 years</p>
            <p className={styles.other}>Location: Sulurpet</p>
        </div>
    </div>
    </div>
    );
}