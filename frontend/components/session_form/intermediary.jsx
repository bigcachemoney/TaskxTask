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

          <div className="inter-form">
            <Link className="signup" to="/signup">Sign Up</Link>
          </div>
          <div>
            <Link className="login" to="/login">Log In</Link>
          </div>
        </div>
      </div>
    </div>
  )
}