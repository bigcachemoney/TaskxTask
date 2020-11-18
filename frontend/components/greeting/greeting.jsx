import React from 'react';
import { Link } from 'react-router-dom';

// const Splash = () => {
//   return (
//     <div>
//       <img className="wallpaper" src="https://imgur.com/a/zbOInAp" />
//     </div>
//   )
// }

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login">Login</Link>
      &nbsp;or&nbsp;
      <Link to="/signup">Sign Up</Link>
    </nav>
  );
  
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Welcome to Task x Task {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;