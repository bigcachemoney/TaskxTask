import React from 'react';
import { Link } from 'react-router-dom';

const Splash = () => {
  return (
    <div className="main-splash">
     

      <div className="wallpaper">

        <div className="topnav">
          <Link to="/"><img className="logo" src="https://i.imgur.com/7FP232c.png"/></Link>

          <div id="buttons">
              <Link id="login" to="/login">Login</Link>
              <Link id="signup" to="/signup">Sign Up</Link>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Splash;