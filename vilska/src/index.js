import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Account from './Account';
import Movies from './Movies';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
   <App />
  </BrowserRouter>
);
