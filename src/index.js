import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './common.css';
import App from './App';
import AppContext from './context/AppContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
  <AppContext>
    <ToastContainer/>
    <App />
  </AppContext>
  // </React.StrictMode>
);
