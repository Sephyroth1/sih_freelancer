import React, { useState } from 'react'
import styles from './styles/learning.module.css';
import { useLocation } from 'react-router-dom';

export default function Learning({ Mentor }) {
    const [visible, setVisible] = useState("section");
    const locate = useLocation();
    const { state } = locate;
    const handleClick = (section) => {
        setVisible(section);
    }
    const course_materials = [
        {
            name: "Web Developer",
            book_url: "https://reader.z-library.sk/?source=4d3630d71ec93ea52e5ac4173b3c06f1487f3b88b23d0be63b520754eb8b6bae"
        },
        {
            name: "Python Developer",
            book_url: "https://reader.z-library.sk/?source=7703074884ab8735ad31811b4c714a1bfd16707ba235208132f0e6a715b25b99",
        },
        {
            name: "Front End Developer",
            book_url: "https://reader.z-library.sk/?source=6789b1ef325a01114c6b2ec67abcf2d24b7c397593d6042b0e223cb61680dfcb",
        },
        {
            name: "Photography",
            book_url: "https://reader.z-library.sk/?source=d65f4f8960e32ccd0b9040126fdace7c6a7f80c138359421a7cadc22b3d00fef"
        },
        {
            name: "Artist",
            book_url: "https://reader.z-library.sk/?source=b1e36df4eb7d89e6aebcb6d9361567d71860645e694bf7e8146b719534109a93"
        },
        {
            name: "Video Editor",
            book_url: "https://reader.z-library.sk/?source=6a4b9d2e4b3c0fdcc426734ffc98c1b42820db03ba03ad952dea65b1f2b1fb51",
        },
        {
            name: "Game Editor",
            book_url: 'https://reader.z-library.sk/?source=46e8f32a0b751b6b880335f2b04e7f0a8f41f2c0e66eef2f44f5332d1a7740e0',
        },
        {
            name: "Java Developer",
            book_url: "https://reader.z-library.sk/?source=f955b8b137412b08109f2d204915fc48f185c0bab6242cef6e18c32ec328d6a9"
        },
    ]

    const selectedCourse = course_materials.find(
        (course) => course.name === state?.name,
    );

    console.log(selectedCourse);    

    return(
            <div className={styles.container}>
                <h1 className={styles.heading}>SkillFolio Learning</h1>
                <nav className={styles.nav_container}>
                    <button className={styles.button_details} onClick={() => handleClick("course_details")}>Course Details</button>
                    <button className={styles.button_materials} onClick={() => handleClick("course_materials")}>Course Materials</button>
                    <button className={styles.button_mentorDetails} onClick={() => handleClick("mentor_details")}>Mentor Details</button>
                </nav>
                {visible === "course_details" ? (
                    <section className={styles.course_details}>
                        <h1>Course Details</h1>
                        <p className={styles.other}>Name: Web Development Course</p>
                        <p className={styles.other}>Description: Learn how to build modern websites and web applications using HTML, CSS, and JavaScript.</p>
                        <p className={styles.other}>Duration: 3 months</p>
                        <p className={styles.other}>Prerequisites: Basic understanding of computers and the internet</p>
                    </section>
                ) : visible === "course_materials" ? (
                    console.log(selectedCourse),
                    <section className={styles.course_materials}>
                        <h1 className={styles.link_header}>Course Materials</h1>
                        <p className={styles.paragraph_link}>
                            Primary TextBook to Refer To:
                            <a href="https://reader.z-library.sk/?source=4d3630d71ec93ea52e5ac4173b3c06f1487f3b88b23d0be63b520754eb8b6bae" target="_blank" rel="noopener noreferrer" className={styles.textbook_link}>
                                Web Developer Text Book
                            </a>
                        </p>
                    </section>
                ) : visible === "mentor_details" ? (
                   <section className={styles.mentor_details}>
                    <h1 className={styles.link_header}>Mentor Details</h1>
                    <p className={styles.other}>name: {state.name}</p>
                    <p className={styles.other}>skills: {state.skill}</p>
                    <p className={styles.other}>years of experience: {state.yoe}</p>
                    <p className={styles.other}>location: {state.location}</p>
                   </section> 
                ) : (
                    <div></div>
                )}
            </div>
    )
}