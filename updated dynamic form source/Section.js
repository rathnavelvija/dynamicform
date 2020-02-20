import React from 'react';
import Input from './Input'


class Section extends React.Component {


    constructor(props){
        super(props);
        this.state={
            secname : 'section value',
           inputList: [],
           fldname:'',
           fldtype:'',
           v1:[],
         fldarray:[],
    
        };
        
        this.onAddBtnClick = this.onAddBtnClick.bind(this);
        this.handleSecname=this.handleSecname.bind(this);
        this.childValues=this.childValues.bind(this);
        
        }
        handleSecname(event){
           
            this.setState({secname: event.target.value});
        }
        childValues(fieldname,fieldtype){
            // console.log("hello", fieldname,fieldtype);

           this.setState({fldname :fieldname, fldtype:fieldtype}, ()=> {
            //    console.log("*******",this.state);
           });         
        }

        onAddBtnClick(event) {
         //  alert(this.state.fldname);
          //  this.props.formtrigger(this.state.fldname,this.state.fldtype,this.state.secname);
          this.props.formtrigger(this.state.secname,this.state.fldarray);
            
            const inputList = this.state.inputList;

            this.setState({
                inputList: inputList.concat(<Input key={inputList.length} parenttrigger={this.childValues} />)
            });

        
            const fldarray=[...this.state.fldarray,{fieldname:this.state.fldname,fieldtype:this.state.fldtype}];
        
            this.setState({fldarray});

            //console.log("fieldArray in section",this.state.fldarray);
        }

    render() {
        return (
<div className="container">
 <div className="form-group"></div>
<div className="card">
    
 <div className="card-body">
 <div className="row col-sm-6">
   <label>Section Name:</label>
   <input type="text" name="secname" value={this.state.handleSecname} onChange={this.handleSecname}  placeholder="Sectionname"/>
   <div className="col-sm-2">
      
   </div>
 </div>
</div>
        <button type="button" className="btn btn-small btn-primary float-right" onClick={this.onAddBtnClick} value = "Addfield">Add Fields</button> 
        {this.state.inputList.map(function(input, index) {
        return input;
      })}

<div className="text-left row col-sm-4"> </div>
</div>

</div>
);
}
}

export default Section;