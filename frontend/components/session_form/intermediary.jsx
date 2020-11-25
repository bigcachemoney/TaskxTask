import React from 'react';
import { Link } from 'react-router-dom';

export default () => {

  return (
    <div className="wallpaper">
      <div className="login-form-container">
        <div className="login-form-box">
          <Link to="/">
            <img className="inter-logo" src="https://i.imgur.com/7FP232c.png" />
          </Link>


          <div className="login-signup"> 
            <div className="signup2">
              <Link className="signup" to="/signup">Sign Up</Link>
            </div>

            <div className="login2">
              <Link className="login" to="/login">Log In</Link>
            </div>

            <div>
              <span>By signing up you agree to our Terms of Use and Privacy Policy</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}