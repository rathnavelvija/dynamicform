import React from 'react';


class Input extends React.Component {

    constructor(props){
        super(props);
        this.state={
            fieldname : '',
            fieldtype : '',
        
        };
          
        this.setFieldNameHandler=this.setFieldNameHandler.bind(this);
        
        this.setFieldTypeHandler=this.setFieldTypeHandler.bind(this);
        this.submitHandler=this.submitHandler.bind(this);
        
        }
 
        setFieldNameHandler(event) {  
            this.setState({fieldname: event.target.value});
               
        }
        setFieldTypeHandler(event){
            this.setState({
                fieldtype: event.target.value });
               
        }
        submitHandler(){
            this.props.parenttrigger(this.state.fieldname,this.state.fieldtype);

            console.log("input name ",this.state.fieldname);
            console.log("input type",this.state.fieldtype);  
        }

    render() {
        return (
            <div className="row">
            <div> 
                <label className="labels">Enter Label name</label>
                <input type="text" name="fieldname" value={this.state.fieldname} onChange={this.setFieldNameHandler}  placeholder="Fieldname"/>
            </div>  
            <div> 
            <label className="labels">Enter Field Type</label>
            <input type="text" name="fieldtype" value={this.state.fieldtype} onChange={this.setFieldTypeHandler}  placeholder="FieldType"/>
            </div>
            <button onClick={this.submitHandler}>confirm</button>
            </div>
        );
    }
}

export default Input;