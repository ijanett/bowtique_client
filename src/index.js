import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';

import App from './App';
import thunk from 'redux-thunk';
import itemsReducer from './reducers/itemsReducer.js'
import userReducer from './reducers/userReducer'
import * as serviceWorker from './serviceWorker';

let rootReducer = combineReducers({ itemsReducer, userReducer
    })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
  ));

const rootElement = document.getElementById('root');


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
