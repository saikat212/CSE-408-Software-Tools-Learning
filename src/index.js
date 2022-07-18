import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SignIn from './DC/SignIn/SignIn';
import SignUp from './/DC/SignUp/SignUp';
import Checkout from './DC/Payment/Checkout';
import Dashboard from './DC/dashboard/Dashboard';
import Pricing from './DC/pricing/Pricing';
import Centers from './DC/Centers/centers';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Dashboard />
    <SignUp />
    <SignIn />
    <Checkout />
    <Centers />
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
