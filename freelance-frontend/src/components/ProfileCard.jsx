import React from 'react';
import styles from './styles/profile.module.css';

export default function ProfileCard({ freelancer }) {
    return(
        <div className={styles.profile_container}>
                    <header className={styles.profile_header}>
                        <img src={freelancer.profilePicture} alt={`${freelancer.name}'s profile`} className={styles.profile_picture} />
                        <h1 className={styles.header1}>{freelancer.name}</h1>
                        <p className={styles.tagline}>{freelancer.title}</p>
                    </header>
                    <section className={styles.contact_info}>
                        <h2 className={styles.header2}>Contact Information</h2>
                        <p>Email: {freelancer.email}</p>
                        {freelancer.phone && <p>Phone: {freelancer.phone}</p>}
                        {freelancer.socialMedia && (
                            <div className="social-media">
                                {freelancer.socialMedia.map((link, index) => (
                                    <a key={index} href={link.url} className={styles.link} target="_blank" rel="noopener noreferrer">
                                        {link.platform}
                                    </a>
                                ))}
                            </div>
                        )}
                    </section>
                    <section className={styles.professional_summary}>
                        <h2 className={styles.header2}>Professional Summary</h2>
                        <p>{freelancer.bio}</p>
                        <div className="skills">
                            {freelancer.skills.map((skill, index) => (
                                <span key={index} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </section>
                    <section className={styles.experience_education}>
                        <h2 className={styles.header2}>Experience</h2>
                        <ul>
                            {freelancer.experience.map((job, index) => (
                                <li key={index}>
                                    <h3>{job.role} at {job.company}</h3>
                                    <p>{job.description}</p>
                                </li>
                            ))}
                        </ul>
                        <h2 className={styles.header2}>Education</h2>
                        <ul>
                            {freelancer.education.map((edu, index) => (
                                <li key={index}>
                                    <h3>{edu.degree} from {edu.institution}</h3>
                                </li>
                            ))}
                        </ul>
                    </section>
                    <section className={styles.portfolio}>
                        <h2 className={styles.header2}>Portfolio</h2>
                        {freelancer.portfolio.map((project, index) => (
                            <div key={index} className={styles.portfolio_item}>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>}
                            </div>
                        ))}
                    </section>
                    <section className={styles.reviews}>
                        <h2 className={styles.header2}>Reviews</h2>
                        {freelancer.reviews.map((review, index) => (
                            <div key={index} className={styles.review}>
                                <p>{review.comment}</p>
                                <p><strong>Rating:</strong> {review.rating}</p>
                            </div>
                        ))}
                    </section>
                    <section className={styles.availability_rates}>
                        <h2 className={styles.header2}>Availability & Rates</h2>
                        <p>Currently {freelancer.isAvailable ? 'Available' : 'Not Available'}</p>
                        <p>Hourly Rate: {freelancer.hourlyRate}</p>
                    </section>
                    <section className={styles.certifications_awards}>
                        <h2 className={styles.header2}>Certifications & Awards</h2>
                        <ul>
                            {freelancer.certifications.map((cert, index) => (
                                <li key={index}>{cert}</li>
                            ))}
                        </ul>
                        <ul>
                            {freelancer.awards.map((award, index) => (
                                <li key={index}>{award}</li>
                            ))}
                        </ul>
                    </section>
                    <footer className={styles.contact_cta}>
                        <button className={styles.but_foot}>Hire</button>
                        <button className={styles.but_foot}>Message</button>
                    </footer>
                </div>
    )
}