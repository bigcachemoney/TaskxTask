import React from 'react';
import { Link } from 'react-router-dom';

//make this page more dynamic with props

const Splash = props => {

  const display = props.loggedIn ? ( 
    <div className="logoutbutton">
      <button onClick={props.logout}>
        Logout
      </button>
    </div>
  ) : (
    <div id="buttons">
      <Link id="login" to="/login">LOGIN</Link>
      <Link id="signup" to="/signup">SIGN UP</Link>
    </div>
  )
  
  return (
    <div className="main-splash">
      <div className="wallpaper">
        <div className="topnav">
          <Link to="/"><img className="logo" src="https://i.imgur.com/7FP232c.png"/></Link>


        {display}

        </div>

        <div className="text-container">
        
            <h1 className="text-header">FIND THE BEST HELP</h1>
            <p className="text-body">GET HELP FROM MILLIONS OF TRUSTED TASKERS FOR EVERYTHING FROM ERRANDS TO DEFEATING DUNGEON BOSSES!</p>
          
          
            
              <div className="search-padding">
                  <div className="search-form">

                      <div className="searchbox">
                        <input type="search" id="search" placeholder="I need help with..." />
                        <Link id="searchbutton" to="/login">GET HELP TODAY</Link>
                      </div>
                  </div>
              </div>
        </div>
        
      </div>


    </div>
  )
}

export default Splash;