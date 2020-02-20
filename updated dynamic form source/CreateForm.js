import React from 'react';
import { Route, Switch, Link ,Redirect, BrowserRouter as Router} from 'react-router-dom';
import Section from './Section';


class Createform extends React.Component{

    constructor(props){
        super(props);
        this.state={
            formname : ' ',
            childsecname:'',
            childfieldtype:'',
            childfieldname:'',    
            childfieldarray:[],
           inputList1: [],
            fields:[],
            sections:[],
           fieldhandler:[{fieldname: "",fieldtype: ""}],        
        };

        this.clickHandler = this.clickHandler.bind(this);
        this.handleFormname =this.handleFormname.bind(this);
        this.handleSecname=this.handleSecname.bind(this);
        this.onSectionBtnClick = this.onSectionBtnClick.bind(this);
        this.sectionValues=this.sectionValues.bind(this);
        
        }
        sectionValues(secname,fldarray)
        {
       //   console.log("form",secname,fldname,fldtype);

          this.setState({childsecname :secname, childfieldarray:fldarray}, ()=> {
            // console.log("childarray in form",this.state.childfieldarray);
        });

      
        }

        onSectionBtnClick(event) {
            const inputList1 = this.state.inputList1;

      

            this.setState({
                inputList1: inputList1.concat(<Section key={inputList1.length} formtrigger={this.sectionValues} />),
            });

            
            const sections=[...this.state.sections,{sectionname:this.state.childsecname,fields:this.state.childfieldarray}];
        
            this.setState({sections});

            console.log("sections in form",this.state.sections);

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
    // obj1.secname=this.state.childsecname;
    // obj1.fieldname=this.state.childfieldname;
    // obj1.fieldtype=this.state.childfieldtype;
    // obj1.fields=this.state.fieldhandler;   
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
                    <button type="button" onClick={this.onSectionBtnClick} value = "AddSection">Add Section</button> 
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
        }
    
    
    }


    export default Createform;