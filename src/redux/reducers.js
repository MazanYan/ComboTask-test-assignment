import * as a from './actionTypes';

const initialState = {
    news: [],
    //pageToFetch: 1,
    loading: false,
};

export default function rootReducer(state = initialState, action) {

    switch(action.type) {
        case a.REQUEST_DATA:
            return {
                ...state,
                loading: true
            };
        case a.RECEIVE_DATA: 
            return {
                ...state,
                loading: false,
                news: state.news.concat(action.payload.news),
                //pageToFetch: state.pageToFetch++
            };
        case a.ORDER_BY_COLUMN: {
            console.log('OrderByColumn reducer');
            console.log(`Field: ${action.payload.column}`);
            console.log(state.news[0]);
            const orderFunction = (news, field) => news.sort((a, b) => a[field] < b[field]);

            const newState = {
                ...state,
                news: orderFunction(state.news, action.payload.column)
            };

            if (action.payload.order === 'desc')
                return {
                    ...state,
                    news: newState.news.reverse()
                }

                return newState;
            };
        default:
            return state;
    }
}
