import React from 'react';
import { Link } from 'react-router-dom';

//make this page more dynamic with props

const Splash = props => {

  const displaybuttons = props.loggedIn ? ( 
    <div className="logoutbutton">
      <button className="session-submit" onClick={props.logout}>
        Logout
      </button>
    </div>
  ) : (
    <div className="buttons">
      {/* <Link className="login" to="/task">DEMO LOGIN</Link> */}
      <Link className="login" to="/login">LOGIN</Link>
      <Link className="signup" to="/signup">SIGN UP</Link>
    </div>
  )

  const bookbutton = props.loggedIn ? ( 
    <div className="book-task-button">
      <Link to="/task/new">
        <button className="session-submit" onClick={props.logout}> 
          Book a Task
        </button>
      </Link>
    </div>
  ) : ('')
  
  const treasurehunt = props.loggedIn ? ( 
    <div className="treasure-hunt-button">
      <button className="session-submit" onClick={props.logout}> 
        Treasure Hunt
      </button>
    </div>
  ) : ('')

  const protection = props.loggedIn ? ( 
    <div className="protection-button">
      <button className="session-submit" onClick={props.logout}> 
        Protection
      </button>
    </div>
  ) : ('')

  const monster = props.loggedIn ? ( 
    <div className="monster-slaying-button">
      <button className="session-submit" onClick={props.logout}> 
        Monster Slaying
      </button>
    </div>
  ) : ('')

  debugger
  return (
    <div className="main-splash-container">
        <div className="wallpaper">
          <img src="https://i.imgur.com/H4Nef0z.jpg"/>
        </div>

        <div className="topnav">
          <Link className="logolink" to="/">
            <img className="logo" src="https://i.imgur.com/7FP232c.png"/>
          </Link>
          {bookbutton}
          {displaybuttons}
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

          {treasurehunt}
          {protection}
          {monster}
        </div>

        <div className="footer">

          <div className="footer-txt">Created by Ray Liang </div>
          <div className="footer-links">

           {/* <div className="footer-github">|</div> */}
            <a href="https://github.com/bigcachemoney">
              <button className="github"></button>
            </a>

            {/* <div className="footer-linkedin">|</div> */}
            <a href="https://www.linkedin.com/in/raylanliang/">
              <button className="linkedin"></button>
            </a>

            {/* <div className="footer-break">|</div> */}
            <a href="https://www.instagram.com/sizzlinwok/">
              <button className="instagram"></button>
            </a>

          </div>
        </div>

    </div>
  )
}

export default Splash;