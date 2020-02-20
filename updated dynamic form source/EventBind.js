import React, { Component, useLayoutEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class EventBind extends React.Component {

    constructor(props){
    super(props);
    this.state={
        username : ' ',
        password:'',
    };
    this.handleusername =this.handleusername.bind(this);  
    }
handleformname(event)
{
    this.setState({username: event.target.value});
}
   

clickHandler(event){

        alert(this.state.username);
        alert(this.state.password);
        event.preventDefault();
    }



    render(){
return(
<div>
    <body>
    <form name="createForm" className="login-form" onSubmit={this.clickHandler}>
    <div>
        <label>Username</label> 
        <input type="text" name="formname" value={this.state.handleformname} onChange={this.handleusername} className="form-control1" placeholder="formname"  required=""/>
    </div>

    <button type="submit" className="login-btn" value="Submit" >Submit</button>
    </form>
    </body>
</div>  

);
    }


}

export default EventBind;







