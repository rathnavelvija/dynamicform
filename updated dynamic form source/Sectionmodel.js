import React from 'react';

function Sectionmodel(){

    return(
        <div>
             <div  className="text-center"><h2> Create New Form</h2></div>
            <pre/>
            <div className="row col-sm-6" >
            <label>Enter Form Name:</label>
            <div className="col-sm-2" margin="30%">
              <input type="text"></input> 
            </div>

            </div>  
            <pre/>
            <div className="row col-sm-6">
            <label>Enter Section Name:</label>
            <div className="col-sm-2">
              <input type="text"></input> 
            </div>
            </div>  
<div className="container">
 <div className="form-group"></div>   
<div className="card">
      <div className="card-header">
          <b>Section Container Name</b>
          <button className="btn btn-small btn-success float-right"> Add Textbox</button>
          <pre/>
          <button className="btn btn-small btn-success float-right ">Add Label</button>
         
      </div>
      <div className="card-body">
          <div className="row col-sm-6">
            <label>Enter field Name:</label>
            <div className="col-sm-2">
              <input type="text"></input> 
            </div>
          </div>
      </div>
</div> 
</div>

<div className="container">
 <div className="form-group"></div>   
<div className="card">
      <div className="card-header">
          <b>Section Container Name</b>
          <button className="btn btn-small btn-success float-right"> Add Textbox</button>
          <pre/>
         
      </div>
      <div className="card-body">
          <div className="row col-sm-6">
            <label>Enter Section Name:</label>
            <div className="col-sm-2">
              <input type="text"></input> 
            </div>
          </div>
      </div>
</div> 
</div>
</div>
    );
    
};

export default Sectionmodel;
