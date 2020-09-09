import React from 'react';
import PropTypes from 'prop-types';

import styles from './NewsItem.module.css';

function NewsItem(props) {
    return (
        <tr className={styles.newsItem}>
            <td className={styles.addedTime}>{props.timeAdded}</td>
            <td className={styles.newsText}>
                <h4 className={styles.newsHeader}>{props.newsHeader}</h4>
            </td>
            <td className={styles.newsLink}>
                <a href={props.newsURL} target="_blank">
                    {props.newsDomain}
                </a>
            </td>
        </tr>
    );
}

NewsItem.propTypes = {
    timeAdded: PropTypes.string,
    newsHeader: PropTypes.string,
    newsURL: PropTypes.string,
    newsDomain: PropTypes.string
}

export default NewsItem;
