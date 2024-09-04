import React from 'react'
import styles from './styles/mentorshipcard.module.css';
import { useNavigate } from 'react-router-dom';

export default function Mentorshipcard({ mentor }) {
    const navigate = useNavigate();
    return(
        <div className={styles.profile}>
            <p className={styles.name}>{mentor.name}</p>
            <p className={styles.other}>Skill: {mentor.skill}</p>
            <p className={styles.other}>Years of Experience: {mentor.yoe}</p>
            <p className={styles.other}>Location: {mentor.location}</p>
            <button className={styles.ment_submit} onClick={() => navigate("/learning", { state: mentor })}>Apply Now</button>
        </div> 
    )
}