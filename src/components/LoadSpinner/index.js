import React from 'react';
import styles from './LoadSpinner.module.css';

export default function LoadSpinner() {
    return (
        <div id={styles.floatingCirclesG}>
            <div className={styles.f_circleG} id={styles.frotateG_01}></div>
            <div className={styles.f_circleG} id={styles.frotateG_02}></div>
            <div className={styles.f_circleG} id={styles.frotateG_03}></div>
            <div className={styles.f_circleG} id={styles.frotateG_04}></div>
            <div className={styles.f_circleG} id={styles.frotateG_05}></div>
            <div className={styles.f_circleG} id={styles.frotateG_06}></div>
            <div className={styles.f_circleG} id={styles.frotateG_07}></div>
            <div className={styles.f_circleG} id={styles.frotateG_08}></div>
        </div>
    )
}
