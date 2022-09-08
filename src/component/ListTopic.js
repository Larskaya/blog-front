import React from "react";
import '../App.css'
 
function ListTopic() {
  return (
    <div className="List-Topic__Main-Content">
      <div className='NameList__List-Topic__Main-Content'>Popular Topic</div>
      <div className='ListContent__List-Topic__Main-Content'>

        <div className='Item__ListContent__List-Topic__Main-Content'>
          <div className='Number-Of__Item__ListContent__List-Topic__Main-Content'>12</div>
          <div className='Text__Item__ListContent__List-Topic__Main-Content'>Text Topic</div>
        </div>

        <div className='Item__ListContent__List-Topic__Main-Content'>
          <div className='Number-Of__Item__ListContent__List-Topic__Main-Content'>12</div>
          <div className='Text__Item__ListContent__List-Topic__Main-Content'>Text Topic</div>
        </div>

        <div className='Item__ListContent__List-Topic__Main-Content'>
          <div className='Number-Of__Item__ListContent__List-Topic__Main-Content'>12</div>
          <div className='Text__Item__ListContent__List-Topic__Main-Content'>Text Topic</div>
        </div>
        
      </div>
    </div>
     
  );
}
 
export default ListTopic;
