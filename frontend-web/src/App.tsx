import React from 'react';
import { ToastContainer } from 'react-toastify';
import './core/assets/styles/custom.scss';
import './app.scss';

import 'react-toastify/dist/ReactToastify.css';

import Routes from "Routes";

function App() {
  return (
      <>
        <Routes />
        <ToastContainer/>
      </>  
  );
}

export default App;
