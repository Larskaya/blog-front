import React from "react";
import '../App.css'
import Background from "./Background";
import Profile from "./Profile";
 
function Header() {
  return (
    <div className='Header_Main-Board'>
      <Background />
      <Profile />
    </div>
  );
}
 
export default Header;
