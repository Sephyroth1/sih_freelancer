import React from 'react';
import styles from './styles/jobcard.module.css';

export default function JobCard({ job }) {
    return (
        <div className={styles.jobCard}>
            <h3 className={styles.title}>{job.title}</h3>
            <p className={styles.description}>{job.description}</p>
            <p className={styles.employer}><strong>Employer:</strong> {job.employer}</p>
            <p className={styles.location}><strong>Location:</strong> {job.location}</p>
            <button className={styles.applyButton}>Apply Now</button>
        </div>
    )
}