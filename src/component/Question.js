import React from "react";
import '../App.css'
 
function Question() {
  return (
    <div className="Question__Main-Content">
      <div className='Search__Question__Main-Content'>
        <input className='Input__Search__Question__Main-Content'/>
        <button className='Button__Search__Question__Main-Content'>search</button>
      </div>
      <div className='Article__Question__Main-Content'>
        <div className='User-Item__Article__Question__Main-Content'>
           <div className='Foto__User-Item__Article__Question__Main-Content'>foto</div>
           <div className='Login__User-Item__Article__Question__Main-Content'>login</div>
        </div>
        <div className='Text-Item__Article__Question__Main-Content'>
          <div className='Name-Text__Text-Item__Article__Question__Main-Content'>text</div>
          <div className='Content-Text__Text-Item__Article__Question__Main-Content'>text</div>
          <div className='Data__Text-Item__Article__Question__Main-Content'>text</div>
        </div>
      </div>
    </div>
     
  );
}
 
export default Question;
