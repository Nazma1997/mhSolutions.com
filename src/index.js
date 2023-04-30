import React from 'react';
import ReactDOM from 'react-dom/client';
import "./i18n";
import App from './App';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './assets/css/_main.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

