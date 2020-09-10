import React, { useEffect } from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import { fetchMoreNews } from './redux/actions';

import { connect } from 'react-redux';

import styles from './App.module.css';

import Navbar from './components/Navbar';
import NewsPage from './components/NewsPage';
import NewsItemComments from './components/NewsItemComments';

function App({ requestData }) {

    useEffect(() => requestData(), []);

    return (
        <Router>
            <div id={ styles.root }>
                <Navbar />
                <Route exact path="/" component={NewsPage} />
                <Route path="/:newsId" component={NewsItemComments} />
            </div>
        </Router>
    );
}

const mapDispatchToProps = dispatch => ({
    requestData: () => dispatch(fetchMoreNews(1, 0))
});

export default connect(null, mapDispatchToProps)(App);
