import React, { Component, useLayoutEffect } from 'react';
import './App.css';
//import { Redirect } from 'react-router-dom';
//import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import userlogo from './img/logo2.png';



class logincopy extends React.Component {

    constructor(props){
    super(props);
    this.state={
        username : ' ',
        password:'',
    
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.handleusername =this.handleusername.bind(this);
    this.handlePassword=this.handlePassword.bind(this);
    }
handleusername(event)
{
    this.setState({username: event.target.value});
}


clickHandler(event){

   //     alert(this.state.username);
    //    alert(this.state.password);
        fetch('https://submit',{method:'POST',body:JSON.stringify({userId:this.state.username,password:this.state.password})})
         .then(response => response.json())
        .then(json => console.log(this.state.password))
    event.preventDefault();
    }

handlePassword(event)
    {
        this.setState({password: event.target.value});
    }

    render(){
return(
<div>
    <body>
   
     <div className="login-border" >
     <div className="allign">
     <h3 className="user-login">User Login </h3>    
     <img src={userlogo} alt="userlogo" width="120" height="120" padding="10px" ></img>
        <form name="loginForm" className="login-form" onSubmit={this.clickHandler}>
    
        <div className="form-group">
            <label>Username</label> 

            <input type="text" name="username" value={this.state.username} onChange={this.handleusername} className="form-control1" placeholder="Username"  required=""/>
        </div>

        <div className="form-group">
           <label>Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handlePassword} className="form-control1" placeholder="Password"  required=""/>
         </div>

        <button type="submit" className="login-btn" value="Submit" >Login</button>

        </form>
      </div>
     </div>
    </body>
</div>  

);
    }


}

export default logincopy;


