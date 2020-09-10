import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar(props) {
    
    return (
        <nav className={styles.navbar}>
            <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>Hacker News</Link>
        </nav>
    );
}
