import React, { Component } from 'react';
import { Route, Switch, Link ,Redirect, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
//import Loginform from './login';
import Loginform from './logincopy';
//import fieldadd from './addfields';
import Header from './header';
import Footer from './footer';
import Createform from './CreateForm';
import Sectionmodel from './Sectionmodel';
import Form from './Form';





function loginform() {
     return <div style={{ backgroundColor:'lavender' }} >        
                 <Loginform />
          </div>;
   }



   
function createform() {
   return <div>        
         <Createform/> 
        </div>;
 }


class App extends Component {
    render() {
    return (
       <div>
          <Router>
             <Header/>  
            
             {/* <Form/> */}
            {/* <Sectionmodel/>   */}
<div  className = 'dd-app-js'>      
       <Route exact path="/" component={loginform} />
       </div>   


       <div  className = 'dd-app-js'>      
       <Route exact path="/create" component={createform} />
       </div>    
         {/* <Route path="/Fieldadd">
         <fieldadd/>
      </Route> */}
       
        <Footer/>
       </Router>
      </div>
    );
    
    }
  
}

export default App;

