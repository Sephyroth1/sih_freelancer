import React from 'react';
import styles from './styles/jobcard.module.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';
export default function JobCard({ job }) {
    const navigate = useNavigate();
    const icon = <FontAwesomeIcon icon={faIndianRupee} size='xs' />;
    const handleClick = () => {
        navigate("/cart", { state: job});
    }
    return (
        <div className={styles.jobCard}>
            <h3 className={styles.title}>{job.title}</h3>
            <p className={styles.description}>{job.description}</p>
            <p className={styles.employer}><strong>Employer:</strong> {job.employer}</p>
            <p className={styles.location}><strong>Location:</strong> {job.location}</p>
            <p className={styles.amount}>Amount: {icon}{job.amount}</p>
            <button className={styles.applyButton} onClick={handleClick}>Apply Now</button>
        </div>
    )
}