import React from 'react';
import JobCard from './JobCard';
import styles from './styles/jobs.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const jobsData = [ 
    {
        id: 1,
        title: "Web Developer",
        description: "Build a responsive e-commerce website using React and Node.js.",
        employer: "Tech Solutions",
        location: "Remote",
        amount: "500"
    },
    {
        id: 2,
        title: "Graphic Designer",
        description: "Design a logo and brand identity for a new startup.",
        employer: "Creative Minds",
        location: "Remote",
        amount: "500"
    },
    {
        id: 3,
        title: "Content Writer",
        description: "Write SEO-optimized articles for a tech blog.",
        employer: "Blog Hub",
        location: "Remote",
        amount: "500"
    },
    {
        id: 4,
        title: "Digital Marketing Specialist",
        description: "Run a social media campaign for a new product launch.",
        employer: "Market Pros",
        location: "Remote",
        amount: "500"
    },
    {
        id: 5,
        title: "Mobile App Developer",
        description: "Develop a cross-platform mobile app for a fitness startup.",
        employer: "FitTech",
        location: "Remote",
    },
    {
        id: 5,
        title: "Painter",
        description: "make a painting for an art mueseum",
        employer: "The Art Musuem",
        location: "Not Remote",
    }
];

export default function Jobs() {
    const icon =  <FontAwesomeIcon icon={faArrowLeft} size='2x' className={styles.icon} onClick={() => navigate("/")}/>;
    const navigate = useNavigate();
    return(
        <>
            {icon}
            <h1 className={styles.head}>Jobs Available</h1>
            <div className={styles.container}>
                {jobsData.map((job) => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>
        </>
    );
}