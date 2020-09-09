import React from 'react';
import NewsItem from './NewsItem';
import styles from './NewsPage.module.css';

export default function NewsPage() {
    return (
        <main className={styles.main}>
            <h1>
                News will appear here
            </h1>
            <table>
                <thead>
                <tr className={styles.tableItem}>
                    <th id={styles.timeAdded}>Time added</th>
                    <th id={styles.tableText}>Text</th>
                    <th id={styles.tableLink}>Link</th>
                </tr>
                </thead>
                <tbody>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(id => (
                            <NewsItem key={id} className={styles.tableItem} />
                        ))
                    }
                </tbody>
            </table>
        </main>
    );
}
