import React from 'react'
import ProfileCard from './ProfileCard';

const freelancerRandom = {
    profilePicture: "https://via.placeholder.com/150",
    name: "Alex Johnson",
    title: "Full Stack Developer",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    socialMedia: [
        { platform: "LinkedIn", url: "https://www.linkedin.com/in/alexjohnson" },
        { platform: "GitHub", url: "https://github.com/alexjohnson" },
        { platform: "Twitter", url: "https://twitter.com/alexjohnson" }
    ],
    bio: "I am a dedicated and efficient full stack developer with over 5 years of experience in building web applications. Skilled in JavaScript, React, Node.js, and databases.",
    skills: ["JavaScript", "React", "Node.js", "MongoDB", "CSS", "HTML"],
    experience: [
        {
            role: "Senior Developer",
            company: "Tech Innovators Inc.",
            description: "Led a team of developers to build scalable web applications for various clients, using the latest web technologies."
        },
        {
            role: "Frontend Developer",
            company: "Creative Solutions",
            description: "Worked on creating responsive and interactive user interfaces using React.js and CSS frameworks."
        }
    ],
    education: [
        {
            degree: "B.Sc. in Computer Science",
            institution: "University of California, Berkeley"
        },
        {
            degree: "M.Sc. in Software Engineering",
            institution: "Stanford University"
        }
    ],
    portfolio: [
        {
            title: "E-commerce Website",
            description: "Developed a full-fledged e-commerce platform with a custom shopping cart, user authentication, and payment gateway integration.",
            link: "https://www.example.com/ecommerce"
        },
        {
            title: "Portfolio Website",
            description: "A personal portfolio website to showcase my skills, projects, and experience.",
            link: "https://www.example.com/portfolio"
        }
    ],
    reviews: [
        {
            comment: "Alex is a fantastic developer! Delivered the project on time and exceeded expectations.",
            rating: 5
        },
        {
            comment: "Great communication and excellent coding skills. Would definitely hire again.",
            rating: 4.5
        }
    ],
    isAvailable: true,
    hourlyRate: "$50/hour",
    certifications: ["Certified JavaScript Developer", "React Professional Certification"],
    awards: ["Employee of the Year 2023", "Best Project Award 2022"]
};

export default function Profile() {
    return(
        <ProfileCard freelancer={freelancerRandom} />
    );
}