import React, { Component } from 'react';
import './App.css';
//import { Redirect } from 'react-router-dom';
//import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import userlogo from './img/logo2.png';



class login extends Component {
    render() {

  return (
 <div>
     <body style={{
     
    } }>
    
    <div  className="login-border" >
    <div className="allign">
    <img src={userlogo} alt="userlogo" width="120" height="120" padding="10px" ></img>
    <h3><strong>Login</strong></h3>
    <form name="loginForm" ng-submit="formSubmit()" ng-controller="LoginController" className="login-form">
    <div className="form-group">
    <input type="text" className="form-control1" ng-model="userName" placeholder="username" required=""/>
    </div> 
    <div className="form-group">
    <input type="password" className="form-control1" ng-model="password" placeholder="password" required=""/>
    </div>
    <div className="form-group">
    <button type="submit" className="btn btn-info">Login</button>
    </div>
    </form>
    </div>
    </div>
    </body>
    </div>   
    );
    }
}
export default login;