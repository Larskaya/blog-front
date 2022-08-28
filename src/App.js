import React from "react";
import './App.css'
import Header from "./component/Header";
import MainContent from "./component/MainContent";
 
function App() {
  return (
    <div className="App">
      <div className="Main-Board__App">
        <Header />
        <MainContent />
      </div>
      <div className='Footer__App'>
        <div className='Data__Footer__App'>Data</div>
        <div className='MiniLogo__Footer__App'></div>
      </div>
    </div>
     
  );
}
 
export default App;
