import React from 'react';
import JobCard from './JobCard';
import styles from './styles/jobs.module.css';

const jobsData = [ 
    {
        id: 1,
        title: "Web Developer",
        description: "Build a responsive e-commerce website using React and Node.js.",
        employer: "Tech Solutions",
        location: "Remote",
    },
    {
        id: 2,
        title: "Graphic Designer",
        description: "Design a logo and brand identity for a new startup.",
        employer: "Creative Minds",
        location: "Remote",
    },
    {
        id: 3,
        title: "Content Writer",
        description: "Write SEO-optimized articles for a tech blog.",
        employer: "Blog Hub",
        location: "Remote",
    },
    {
        id: 4,
        title: "Digital Marketing Specialist",
        description: "Run a social media campaign for a new product launch.",
        employer: "Market Pros",
        location: "Remote",
    },
    {
        id: 5,
        title: "Mobile App Developer",
        description: "Develop a cross-platform mobile app for a fitness startup.",
        employer: "FitTech",
        location: "Remote",
    },
];

export default function Jobs() {
    return(
        <>
            <h1 className={styles.head}>Jobs Available</h1>
            <div className={styles.container}>
                {jobsData.map((job) => (
                    <JobCard key={job.id} job={job}/>
                ))}
            </div>
        </>
    );
}