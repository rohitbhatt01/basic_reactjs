import React from 'react';


const ProfileList = (props) =>{

    return(
        <div className="style  ma4 bg-light-blue dib pa4 tc" >
        <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="No Image" />
        <h1 className="" > {props.name} </h1>
         <p> {props.work} </p>
        </div>


    )
}
export default ProfileList; 