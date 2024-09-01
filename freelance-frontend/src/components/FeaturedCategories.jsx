import React from "react";
import styles from './styles/featuredcategories.module.css';
import { NavLink } from "react-router-dom";

export default function FeaturedCategories() {
    return(
        <section className={styles.featured_grid}>
            <h2 className={styles.header_features}>Featured Popular Categories</h2>
            <div className={styles.feature_container}>
                <div className={styles.feature}><NavLink to="/jobs" className={styles.navlink} >Web Development</NavLink></div>
                <div className={styles.feature}><NavLink to="/jobs" className={styles.navlink}>Design</NavLink></div>
                <div className={styles.feature}><NavLink to="/jobs" className={styles.navlink}>Content Writing</NavLink></div>
            </div>
        </section>
    )
}