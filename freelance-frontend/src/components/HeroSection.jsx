import React from 'react';
import {useNavigate} from 'react-router-dom';


export default function HeroSection() {
    const navigate  = useNavigate();

    const handleClick = () => {
        navigate('/jobs');
    }
    return(
        <section className="hero">
            <h1>Find you next Freelance Opportunity.</h1>
            <p>Connecting Freelancer for short-term and project-based work</p>
            <p>We also Teach Freelancers</p>
            <button onClick={handleClick}>Browse Jobs Here</button>
        </section>
    )
}