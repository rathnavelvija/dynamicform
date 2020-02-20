import React from 'react';
import { Route, Switch, Link ,Redirect, BrowserRouter as Router} from 'react-router-dom';
import Section from './Section';


class Createform extends React.Component{

    constructor(props){
        super(props);
        this.state={
            formname : ' ',
            secname:'', 
           inputList1: [],
           sections:[{secname: "",
           fields:[{fieldname: "",
           fieldtype: "", 
            }],
        }],
         
    
        };
        this.clickHandler = this.clickHandler.bind(this);
        this.handleFormname =this.handleFormname.bind(this);
        this.handleSecname=this.handleSecname.bind(this);
        this.onAddBtnClick = this.onAddBtnClick.bind(this);
        
        }

        onAddBtnClick(event) {
            const inputList1 = this.state.inputList1;
            {this.state.sections.map(function(sections, index1) {
                return sections;
              })};

            this.setState({
                inputList1: inputList1.concat(<Section key={inputList1.length} />),
                sections : this.state.sections.concat([{secname: "",
                fields:[{fieldname: "",
                fieldtype: "", 
                 }]
                }]
            )
            });

        }

    handleFormname(event)
    {
        this.setState({formname: event.target.value});

          
    }
       

    clickHandler(event){
    

            event.preventDefault();

            var obj1 = new Object();
	obj1.formname=this.state.formname;
    obj1.sections=this.state.sections; 
    console.log(obj1);
        }
    
    handleSecname(event)
        {
            this.setState({secname: event.target.value});

        }
    
        render(){
    return(
    <div>
  
         <div  className="text-center"><h2> Create New Form</h2></div>
         <form  onSubmit={this.clickHandler} > 
        <div>
            <pre/>
        <div className="row col-sm-6">
            <label >Enter Form Name </label> 
            <div className="col-sm-2" margin="30%">
            <input type="text" name="formname" value={this.state.handleFormname} onChange={this.handleFormname}  placeholder="Formname"/>
        </div>
         </div>
        <div className="form-group">
            </div>
            <div className="container">
            <div className="row">
            <legend className="text-left"><h6>{this.state.handleSecname}</h6></legend>          
                    <button type="button" onClick={this.onAddBtnClick} value = "AddSection">Add Section</button> 
                    {this.state.inputList1.map(function(input, index) {
                    return input;
                  })}
            </div>
            </div>


      
       
        <div className="text-center">
        <button type="submit" className="login-btn" value="Submit" >Submit</button>
        </div>
        
       </div>
        </form>  
          </div> 
    
    );

    function Fieldadd ()
{
   return(
   <div >
   <label>Enter Field Name </label> 
   <input type="text" name="fieldname" placeholder="fieldname"  />
   {/* value={this.state.handlefldname} onChange={this.handlefldname}  */}
   </div>
   );
}
        }
    
    
    }


    export default Createform;