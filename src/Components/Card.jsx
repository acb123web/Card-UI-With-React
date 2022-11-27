import React from 'react';
import  '../Components/Card.css';
/*lets use themecolor now*/

const Card = ({Name,Designation,Followers,Followern,Following,Followingn,Follow,
    Message,themecolor,images}) =>
    {
        return(
            <div className='card' style={{'--theme-color':themecolor}}>
             <img src={images} alt="profile_img" />
             <h4>{Name}</h4>
             <h5>{Designation}</h5>
              <div className='details'>
               <div className='column'>
                <h2>{Followern}</h2>
                <span>{Followers}</span>
               </div>
               <div className='column'>
                <h2>{Followingn}</h2>
                <span>{Following}</span>
               </div>
              </div>
              <div className='buttons'>
               <button>{Follow}</button>
               <button>{Message}</button>
              </div>
            </div>
        )
    }


 export default  Card;