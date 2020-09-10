import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './NewsItem.module.css';

function NewsItem(props) {
    return (
        <tr className={styles.newsItem}>
                <td className={styles.addedTime}>
                    <Link to={`/${props.newsId}`} style={{ textDecoration: 'none', color: "black" }}>
                        {props.timeAdded}
                    </Link>
                </td>
                <td className={styles.newsText}>
                    <Link to={`/${props.newsId}`} style={{ textDecoration: 'none', color: "black" }}>
                        <p className={styles.newsHeader}>
                            {props.newsHeader}
                        </p>
                    </Link>
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
    newsDomain: PropTypes.string,
    newsId: PropTypes.number
}

export default NewsItem;
