import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import './styles.css';

import Routes from "./routes/routes";

function App() {
  return (
    <div className="app" >
      <Routes />
      <ToastContainer autoClose={3000} />
    </div>
  );
};

export default App;