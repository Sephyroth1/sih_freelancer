import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './styles/cart.module.css';

export default function Cart({ Job }) {
    const [visible, setVisible] = useState(false);
    const loc = useLocation();
    const { state } = loc;

    const handleClick = () => {
        setVisible(!visible);
    }
    return(
        <section className={styles.container}>
            <h1>Payment Cart</h1>
            <button className={styles.jobDetails} onClick={handleClick}>Job Details</button>
            {visible ? (
                <div className="container">
                    <h2>Job Details</h2>
                    <p>{state?.title || 'No job details available'}</p>
                    <p>{state?.description || "No job details available"}</p>
                    <p>{state?.employer || "No job details available"}</p>
                    <p>{state?.location || "No job details available"}</p>
                    <button>Add to Cart</button>
                </div>
            ) : (
                <div></div>
            )}
            <button>Pay Now</button>
        </section>
    )
}