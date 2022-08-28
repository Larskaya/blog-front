import React from "react";
import '../App.css'
import ListTopic from "./ListTopic";
import Tools from "./Tools";
import Question from "./Question";
 
function MainContent() {
  return (
    <div className='Main-Content__App'>
      <ListTopic />
      <Question />
      <Tools />
    </div>
  );
}
 
export default MainContent;
