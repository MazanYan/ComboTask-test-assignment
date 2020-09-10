import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import styles from './App.module.css';

import Navbar from './components/Navbar';
import NewsPage from './components/NewsPage';
import NewsItemComments from './components/NewsItemComments';

export default function App() {
    return (
        <BrowserRouter>
            <div id={ styles.root }>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={NewsPage} />
                    <Route path="/:newsId" component={NewsItemComments} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}
