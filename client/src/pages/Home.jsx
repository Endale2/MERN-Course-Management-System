import React from 'react';
import styles from '../styles/components/Home.module.css';

const Home = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Welcome to Udemy Clone</h1>
            <p className={styles.subheading}>Learn new skills from the best instructors online.</p>
            <button className={styles.button}>Explore Courses</button>
        </div>
    );
};

export default Home;


