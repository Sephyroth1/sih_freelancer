import React from 'react'
import styles from './styles/mentorship.module.css';
import { useNavigate } from 'react-router-dom';
import Mentorshipcard from './Mentorshipscard';

export default function Mentorship() {
    const navigate = useNavigate();
    const mentor = [
        {
            id: 1,
            name: "Sanju",
            skill: "Web Developer",
            yoe: "2 years",
            location: "Nellore",
        },
        {
            id: 2,
            name: "Venkatesh",
            skill: "Python Developer",
            yoe: "4 years",
            location: "Hyderabad",
        },
        {
            id: 3,
            name: "Lalitha",
            skill: "Front End Developer",
            yoe: "Freasher",
            location: "Bangalore",
        },
        {
            id: 4,
            name: "Bhanu",
            skill: "Photography",
            yoe: "6 years",
            location: "Kerala",
        },
        {
            id: 5,
            name: "Charan",
            skill: "Artist",
            yoe: "6 years",
            location: "Chennai",
        },
        {
            id: 6,
            name: "Vaishu",
            skill: "Video Editor",
            yoe: "2 years",
            location: "Karnataka",
        },
        {
            id: 7,
            name: "Aswini",
            skill: "Game Editor",
            yoe: "1 years",
            location: "Guntur",
        },
        {
            id: 8,
            name: "Manisha",
            skill: "Java Developer",
            yoe: "4 years",
            location: "Nellore",
        },
        {
            id: 9,
            name: "Himesh the hero",
            skill: "Game Designer",
            yoe: "2 years",
            location: "USA",
        },
        {
            id: 10,
            name: "Sudhamshu",
            skill: "Hacker",
            yoe: "2 years",
            location: "Hyderabad",
        }
    ]
    return(
    <div className={styles.heading_container}>
    <h1 className={styles.head}>Mentorship</h1>
    <div className={styles.container}>
                {mentor.map((men) => (
                    <Mentorshipcard key={men.id} mentor={men} />
                ))}
    </div>
    </div>
    );
}