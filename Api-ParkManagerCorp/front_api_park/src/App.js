import React from "react";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Components/Auth/Auth.css';

import Header from './Components/Header/Header'
import Login from './Components/Auth/Login';
import SignUp from './Components/Auth/Register';
import Home from './Components/Pannel/Dashboard';
import DashboardUser from './Components/Pannel/DahsboardUser';



function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <SignUp />
      <Home />
      <DashboardUser />


    </div>
  );
}

export default App;
