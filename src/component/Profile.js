import React from "react";
import '../App.css'
 
function Profile() {
  return (
    <div className="Profile__Header">
      <div className='User__Profile__Header'>
        <div className='Foto__User__Profile__Header'>Foto</div>
        <div className='Text__Profile__Header'>Standart</div>
        <div className='Button__Profile__Header'><button>Profile</button></div>
        <div className='Button__Profile__Header'><button>Logout</button></div>
      </div>
    </div>
     
  );
}
 
export default Profile;
