// /src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './assets/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyComponent from './move';
import Filled from './filled';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
    <MyComponent />
    <Filled />
  </BrowserRouter>
);

reportWebVitals();