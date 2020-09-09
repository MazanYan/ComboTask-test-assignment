import React from 'react';
import styles from './App.module.css';

import Navbar from './components/Navbar';
import NewsPage from './components/NewsPage';

export default function App() {
    return (
        <div id={ styles.root }>
            <Navbar />
            <NewsPage />
        </div>
    );
}
