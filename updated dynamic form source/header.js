import React from  'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import headerlogo from './img/tatalogo.png';
function header(){

return(

    <header className="page-header font-small blue pt-4 ">
<div className="allign1">
<img src={headerlogo} alt="headerlogo" width="220px" height="80px" padding="10px" ></img>
  </div>
  </header>
);

};

export default header;
