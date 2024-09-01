import React from 'react'
import styles from './styles/learning.module.css';

export default function Learning() {
    const [active, setActiveTab] = useState('details');
    return(
            <div className={styles.container}>
                <h1 className={styles.heading}>SkillFolio Learning</h1>
                <nav className={styles.nav_container}>
                    <button className={styles.button_details}>Course Details</button>
                    <button className={styles.button_materials}>Course Materials</button>
                </nav>
            </div>
    )
}