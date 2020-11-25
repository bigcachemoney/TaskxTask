import React from 'react';
import { Link } from 'react-router-dom';


const Nav = props => {

  const displaybuttons = props.loggedIn ? (
    // <div className="logoutbutton">
      <button className="session-submit" onClick={props.logout}>
        Logout
      </button>
    // </div>
  ) : (
    <div className="buttons">
      {/* <Link className="login" to="/task">DEMO LOGIN</Link> */}
      {/* <Link className="login" to="/login">LOG IN</Link> */}
      <Link className="login" to="/intermediary">LOG IN</Link>
      {/* <Link className="signup" to="/signup">SIGN UP</Link> */}
    </div>
  ) 
  const bookbutton = props.loggedIn ? (
    // <div className="book-task-button">
      <Link to="/task/new">
        <button className="session-submit">
          Book a Task
        </button>
      </Link>
    // {/* </div> */}
  ) : ('')

  debugger
  return (
    < div className = "topnav" >
        <Link className="logolink" to="/">
          <img className="logo" src="https://i.imgur.com/7FP232c.png" />
        </Link>
      <div className = "navButtons">
        { bookbutton }
        { displaybuttons }
      </div>
    </div >
  )
}

export default Nav;