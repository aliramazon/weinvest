import React from 'react';
import ReactDOM from 'react-dom';
import { AppRouter } from './app/router';
import * as serviceWorker from './serviceWorker';
import { AppProvider } from './context/AppContext';

const root = document.getElementById('root');

ReactDOM.render(
    <React.StrictMode>
        <AppProvider>
            <AppRouter />
        </AppProvider>
    </React.StrictMode>,
    root
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
