import React, { Component } from 'react';
import { Route, Link ,Redirect,BrowserRouter as Router} from 'react-router-dom';
import './App.css';
//import Loginform from './login';
import Loginform from './logincopy';
//import addfields from './addfields';
import Header from './header';
import Footer from './footer';
import Createform from './CreateForm';






function loginform() {
     return <div style={{ backgroundColor:'lavender' }} >        
                 <Loginform />
          </div>;
   }


class App extends Component {
    render() {
    return (
       <div>
          <Createform/>
          {/* <Router>
      <div  className = 'dd-app-js'>               
		  	<Route exact path="/login" component={loginform} />
       </div>  */}
       {/* <Switch>
         <Route path="/addfields">
          <addfields/>
        </Route>
        </Switch> */}
       
      </div>
    // <EventBind/>
         //  <Router>
         //     <div>
         //  <Header />
         //     <div  className = 'dd-app-js'>               
		  	// <Route exact path="/login" component={loginform} />
         // </div>         
         // <Footer />
         //  </div>
         //  </Router>
        

    );
    
    }
  
}

export default App;