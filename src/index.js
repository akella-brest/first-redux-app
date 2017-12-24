import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

function playList(state = [], action) {
    if (action.type === 'ADD_TRACK') {
        return [
            ...state,
            action.payload
        ]
    }
    return state;
}

const store = createStore(playList);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();