import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LoadSpinner from '../LoadSpinner';
import styles from './NewsItemComments.module.css';

const commentsApi = 'https://api.hnpwa.com/v0/item';

function Comment(props) {

    return (
        <section style={{ marginLeft: `${props.level * 2}rem` }}>
            <h5>By: {props.userName} <span className={styles.timeAgo}>{props.timeAgo}</span></h5>
            <p 
                className={styles.comment}
                dangerouslySetInnerHTML={{__html: marked(props.content.replace('<p>', ''), {sanitize: false})}}
            />
        </section>
    );
}

Comment.propTypes = {
    userName: PropTypes.string,
    content: PropTypes.string,
    timeAgo: PropTypes.string,
    level: PropTypes.number
};

function NewsItemComments(props) {

    const newsId = useParams().newsId;
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [news, setNews] = useState(['', '']);

    useEffect(() => {
        axios.get(`${commentsApi}/${newsId}.json`)
            .then(response => {
                setNews([response.data.title, response.data.url]);
                console.log(response.data.url);
                setComments(response.data.comments);
                setLoading(false);
            });
    }, []);

    const renderComments = (comments) => {
        return comments.map(comm => (
            <>
                <Comment 
                    key={comm.id}
                    userName={comm.user}
                    content={comm.content}
                    timeAgo={comm.time_ago}
                    level={comm.level}
                />
                {
                    !!(comm.comments) &&
                        renderComments(comm.comments)
                }
            </>
        ))
    }

    if (!loading)
        return (
            <main className={styles.main}>
                <h1>
                    Comments on '<a href={news[1]} target="_blank">{news[0]}</a>'
                </h1>
                { renderComments(comments) }
            </main>
        )
    else
        return <LoadSpinner />
}

export default NewsItemComments;
