import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMoreNews, orderByColumn } from '../../redux/actions';
import useWindowDimensions from '../../hooks/useWindowDimensions';

import NewsItem from '../NewsItem';
import styles from './NewsPage.module.css';
import LoadSpinner from '../LoadSpinner';

function NewsPage({ news, loading, requestData, orderByColumn }) {

    let pageToLoad = 2;
    const [order, setOrder] = useState('asc');
    const { width } = useWindowDimensions();

    const switchOrder = () => order === 'asc' ? setOrder('desc') : setOrder('asc');

    const handleScroll = (_) => {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset;
        if (windowBottom >= docHeight) {
            // bottom reached
            window.scrollTo(0, window.pageYOffset);
            requestData(pageToLoad);
            pageToLoad++;
            
        } else {
            // bottom not reached
            return;
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <main className={styles.main}>
            <h1>
                News will appear here
            </h1>
            <table id="news-feed">
                <thead>
                    <tr className={styles.tableItem}>
                        <th 
                            id={styles.timeAdded} 
                            onClick={() => { orderByColumn('time', order); switchOrder() }}
                        >
                            Time added
                        </th>
                        <th 
                            id={styles.tableText} 
                            onClick={() => {
                                if (width > 500)
                                    orderByColumn('title', order);
                                else
                                    orderByColumn('time', order);
                                switchOrder() 
                            }}
                        >
                            Title
                        </th>
                        <th 
                            id={styles.tableLink} 
                            onClick={() => { orderByColumn('domain', order); switchOrder() }}
                        >
                            Link
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        !!news &&
                            news.map(news => (
                                <NewsItem 
                                    key={news.id} 
                                    timeAdded={news.time_ago}
                                    newsHeader={news.title}
                                    newsURL={news.url}
                                    newsDomain={news.domain}
                                    newsId={news.id}
                                    commentsCount={news.comments_count}
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
                </tbody>
            </table>
        </main>
    );
}

const mapStateToProps = state => ({
    news: state.news,
    loading: state.loading
});

const mapDispatchToProps = dispatch => ({
    requestData: (pageToLoad) => dispatch(fetchMoreNews(pageToLoad)),
    orderByColumn: (column, order) => dispatch(orderByColumn(column, order))
});

NewsPage.propTypes = {
    news: PropTypes.array,
    loading: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);
