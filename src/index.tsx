import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root');

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="example1" element={<h1>I am Example1</h1>} />
                    <Route path="example2" element={<h1>I am Example2</h1>} />
                </Route>
            </Routes>
        </Router>
    </React.StrictMode>,
    root
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
