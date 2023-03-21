//Este archivo es donde se manda a llamar la aplicación (App)

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Este método es propio de REACT DOM pasa la App a Index.html dentro de Public
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);

