import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import AdminProvider from './context/AdminProvider.provider'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter >
      <AdminProvider >
        <App />
      </AdminProvider>
    </BrowserRouter>
);


reportWebVitals();
