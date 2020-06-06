import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Dashboard from './containers/Dashboard';
import configureStore, { history } from './configureStore';
const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
        <Dashboard history={history}>
            <App />
        </Dashboard>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
