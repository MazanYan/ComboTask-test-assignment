import React from 'react';
import styles from './Navbar.module.css';

export default function Navbar(props) {
    
    return (
        <nav className={styles.navbar}>
            <span>Hacker News</span>
        </nav>
    );
}
