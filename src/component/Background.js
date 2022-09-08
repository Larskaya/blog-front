import React from "react";
import '../App.css'
 
function Background() {
  return (
    <div className="Background__Header">
      <div className="Profile__Background__Header">
        <div className='Logo__Background__Header'>Logo</div>
        <div className='Name__Background__Header'>Dragon</div>
      </div>
      <div>
        <div className='Paint__Background__Header'>Paint</div>
        <div className='Search__Background__Header'>
          <input className='Input__Search__Background__Header'/>
          <button className='Button__Search__Background__Header'>search</button>
        </div>
      </div>
    </div>
  );
}
 
export default Background;
