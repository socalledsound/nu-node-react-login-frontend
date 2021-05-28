import React from 'react'
import './HomePage.css'

const HomePage = ({ currentUser, data }) => {
    console.log(data)
    return ( 
        <React.Fragment>
        <div className="bg-main" >
        {!currentUser ? (
            <div className="intro-container">
                <p>You know why you're here.  Click the login button in the header and let's do this.</p>
            </div>
         ) : (
             <div className="logged-in-container">
                <p style={{color: 'yellow'}}> hello { currentUser}.  thanks for logging in.</p> 
                <p style={{color: 'yellow'}}> this is what we know about you : </p>
                <p style={{color: 'yellow'}}> status : {data.status} </p>
                <p style={{color: 'yellow'}}> id : {data.user._id} </p>
                <p style={{color: 'yellow'}}> username : {data.user.username} </p>
                <p style={{color: 'yellow'}}> admin : {data.user.admin ? 'true' : 'false'} </p>
                 

            </div>
         )
        }
        </div>
    </React.Fragment>
     );
}
 
export default HomePage
