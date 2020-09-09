import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
//import useAxiosFetch from '../../hooks/useAxiosFetch';

import NewsItem from '../NewsItem';
import styles from './NewsPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import LoadSpinner from '../LoadSpinner';


export default function NewsPage() {

    //const { data, loading } = useAxiosFetch('https://api.hnpwa.com/v0/news/1.json');
    //const [bottomReached, setBottomReached] = useState(false);
    const [pageToLoad, setPageToLoad] = useState(1);
    
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        handleGetNews();
    }, []);

    const handleGetNews = () => {
        setLoading(true);
        const oldScrollPosition = window.pageYOffset;
        axios.get(`https://api.hnpwa.com/v0/news/${pageToLoad}.json`)
            .then(response => {
                console.log(response);
                setPageToLoad(pageToLoad+1);
                setNews(news.concat(response.data));
                setLoading(false);
                window.scrollTo(0, oldScrollPosition);
            });        
    };

    return (
        <main className={styles.main}>
            <h1>
                News will appear here
            </h1>
            <table id="news-feed">
                <thead>
                    <tr className={styles.tableItem}>
                        <th id={styles.timeAdded}>
                            Time added
                            <FontAwesomeIcon icon={faSortDown} className={styles.sortIcon}/>
                        </th>
                        <th id={styles.tableText}>
                            Text
                            <FontAwesomeIcon icon={faSortDown} className={styles.sortIcon}/>
                        </th>
                        <th id={styles.tableLink}>
                            Link
                            <FontAwesomeIcon icon={faSortDown} className={styles.sortIcon}/>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        !loading && !!news &&
                            news.map(news => (
                                <NewsItem 
                                    key={news.id} 
                                    timeAdded={news.time_ago}
                                    newsHeader={news.title}
                                    newsURL={news.url}
                                    newsDomain={news.domain}
                                />
                            ))
                    }
                    {
                        loading &&
                        <tr>
                            <td colSpan="3">
                                <LoadSpinner />
                            </td>
                        </tr>
                    }
                    <tr>
                        <td colSpan="3" onClick={handleGetNews}>
                            Load More
                        </td>
                    </tr>
                </tbody>
            </table>
        </main>
    );
}
