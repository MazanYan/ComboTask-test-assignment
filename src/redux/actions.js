import * as a from './actionTypes';
import axios from 'axios';

/**
 * Action to order news on NewsPage by column
 * @param {String} column   In ['time', 'title', 'domain'] 
 * @param {String} order    In ['asc', 'desc']
 */
export function orderByColumn(column, order) {
    return {
        type: a.ORDER_BY_COLUMN,
        payload: {
            column,
            order
        }
    }
}

export function requestNews() {
    return {
        type: a.REQUEST_DATA,
        payload: {}
    }
}

export function receiveNews(news) {
    return {
        type: a.RECEIVE_DATA,
        payload: {
            news
        }
    }
}

export function fetchMoreNews(pageNum) {
    
    const newsApi = 'https://api.hnpwa.com/v0/news';

    return (dispatch) => {
        dispatch(requestNews());
        axios.get(`${newsApi}/${pageNum}.json`)
            .then(response => dispatch(receiveNews(response.data)));
    }
}
