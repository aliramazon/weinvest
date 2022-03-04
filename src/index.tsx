import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './app/App';
import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root');

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<h1>I am Example1</h1>} />
                    <Route path="funds" element={<h1>I am Example1</h1>} />
                    <Route path="companies" element={<h1>I am Example1</h1>} />
                    <Route
                        path="current-documents"
                        element={<h1>I am Example1</h1>}
                    />
                    <Route path="documents" element={<h1>I am Example1</h1>} />
                    <Route path="members" element={<h1>I am Example1</h1>} />
                    <Route path="profile" element={<h1>I am Example1</h1>} />
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
