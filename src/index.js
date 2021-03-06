import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import {Router, browserHistory} from 'react-router';
import routes from './routes';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import reducers from './reducers'

const store = createStore(reducers)
store.subscribe(() => {
    console.log('subscribe', store.getState())
})
console.log('befare dispatch', store.getState())
store.dispatch({type: 'INCREMENT'})

ReactDOM.render(
    <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
