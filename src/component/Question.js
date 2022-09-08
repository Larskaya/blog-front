import React from "react";
import '../App.css'
 
function Question() {
  return (
    <div className="Question__Main-Content">
      <div className='Article__Question__Main-Content'>
        <div className='User-Item__Article__Question__Main-Content'>
           <div className='Foto__User-Item__Article__Question__Main-Content'>foto</div>
           <div className='Login__User-Item__Article__Question__Main-Content'>login</div>
        </div>
        <div className='Text-Item__Article__Question__Main-Content'>
          <div className='Name-Text__Text-Item__Article__Question__Main-Content'>text</div>
          <div className='Content-Text__Text-Item__Article__Question__Main-Content'>text</div>
        </div>
        <div className='Data__Text-Item__Article__Question__Main-Content'>
          <div className='Item__Data__Text-Item__Article__Question__Main-Content'>Save</div>
          <div className='Item__Data__Text-Item__Article__Question__Main-Content'>Otvet</div>
        </div>
      </div>
    </div>
     
  );
}
 
export default Question;
