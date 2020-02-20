import React from 'react';


class Field extends React.Component {
    constructor(props)
{
    super(props);
this.state={
    fieldname:'',
    fieltype:'',
    fieldarray:[],
};

this.setfieldtype=this.setfieldtype.bind(this);
this.setfieldname=this.setfieldname.bind(this);
this.submitHandler=this.submitHandler.bind(this);
}
setfieldname(event)
{
this.setState({
fieldname:event.target.value
});

}


setfieldtype(event)
{
    this.setState({
        fieldtype:event.target.value
    });

}


submitHandler(){
    console.log("FieldName",this.state.fieldname)  
    console.log("FieldType",this.state.fieldtype)  

    const fieldarray=[...this.state.fieldarray,{fieldname:this.state.fieldname,fieldtype:this.state.fieldtype}];

    this.setState({fieldarray});
    console.log("fieldArray",this.state.fieldarray);
}

render()
{
    return(

        <div>
            <h1> hello</h1>
        <div className>
            <label className="labels">Enter label</label>
            <input type="text" name="fieldname" onChange={this.setfieldname} value={this.state.fieldname}/>
        </div>

        <div>
            <label className="labels">Enter Field type</label>
            <input type="text" name="fieldtype" onChange={this.setfieldtype} value={this.state.fieldtype}/>
        </div>
        <button onClick={this.submitHandler}>confirm</button>
        </div>

    );

}
}

export default Field;

