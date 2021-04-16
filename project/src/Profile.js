import React, {Component} from 'react';

import './Profile.css';
import 'tachyons';
import ProfileList from './Profilelist';
const Profile = (props) =>{
return(
      <div>
     <h1 className="tc"> Welcome to Company Profile</h1>
    
     <ProfileList id="1" name="Rohit" work="Web Developer"/>
     <ProfileList id="1" name="Mayank" work="Senior Engineer"/>
     <ProfileList id="1" name="Rahul" work="Support Engineer"/>
     <ProfileList id="1" name="Shivam" work="Support Engineer"/>
     <button > Sign Out</button>


      </div>
     
)

}
export default Profile;