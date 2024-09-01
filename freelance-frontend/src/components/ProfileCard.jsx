import React from 'react';
import styles from './styles/profile.module.css';

export default function ProfileCard({ freelancer }) {
    return(
        <div className={styles.profile_container}>
                    <header className={styles.profile_header}>
                        <img src={freelancer.profilePicture} alt={`${freelancer.name}'s profile`} className={styles.profile_picture} />
                        <h1>{freelancer.name}</h1>
                        <p className="tagline">{freelancer.title}</p>
                    </header>
                    <section className="contact-info">
                        <h2>Contact Information</h2>
                        <p>Email: {freelancer.email}</p>
                        {freelancer.phone && <p>Phone: {freelancer.phone}</p>}
                        {freelancer.socialMedia && (
                            <div className="social-media">
                                {freelancer.socialMedia.map((link, index) => (
                                    <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                                        {link.platform}
                                    </a>
                                ))}
                            </div>
                        )}
                    </section>
                    <section className="professional-summary">
                        <h2>Professional Summary</h2>
                        <p>{freelancer.bio}</p>
                        <div className="skills">
                            {freelancer.skills.map((skill, index) => (
                                <span key={index} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </section>
                    <section className="experience-education">
                        <h2>Experience</h2>
                        <ul>
                            {freelancer.experience.map((job, index) => (
                                <li key={index}>
                                    <h3>{job.role} at {job.company}</h3>
                                    <p>{job.description}</p>
                                </li>
                            ))}
                        </ul>
                        <h2>Education</h2>
                        <ul>
                            {freelancer.education.map((edu, index) => (
                                <li key={index}>
                                    <h3>{edu.degree} from {edu.institution}</h3>
                                </li>
                            ))}
                        </ul>
                    </section>
                    <section className="portfolio">
                        <h2>Portfolio</h2>
                        {freelancer.portfolio.map((project, index) => (
                            <div key={index} className="portfolio-item">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>}
                            </div>
                        ))}
                    </section>
                    <section className="reviews">
                        <h2>Reviews</h2>
                        {freelancer.reviews.map((review, index) => (
                            <div key={index} className="review">
                                <p>{review.comment}</p>
                                <p><strong>Rating:</strong> {review.rating}</p>
                            </div>
                        ))}
                    </section>
                    <section className="availability-rates">
                        <h2>Availability & Rates</h2>
                        <p>Currently {freelancer.isAvailable ? 'Available' : 'Not Available'}</p>
                        <p>Hourly Rate: {freelancer.hourlyRate}</p>
                    </section>
                    <section className="certifications-awards">
                        <h2>Certifications & Awards</h2>
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
                    <footer className="contact-cta">
                        <button>Hire</button>
                        <button>Message</button>
                    </footer>
                </div>
    )
}