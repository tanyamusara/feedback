import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/**
 * variable container
 * gets root element from the dom
 */
const container = document.getElementById('root');

/**
 * variable root
 * gets creats root using the container variable
 */
const root = ReactDOM.createRoot(container);

root.render(
 <React.StrictMode>
<App/>
</React.StrictMode>
);