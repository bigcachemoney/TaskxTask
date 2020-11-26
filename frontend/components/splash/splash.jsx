import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';
import NavContainer from '../nav/nav_container';
import  Category  from "./category";
import Recommendations from "../recommendation/recommendation";
//make this page more dynamic with props

const Splash = props => {

  // const displaybuttons = props.loggedIn ? ( 
  //   <div className="logoutbutton">
  //     <button className="session-submit" onClick={props.logout}>
  //       Logout
  //     </button>
  //   </div>
  // ) : (
  //   <div className="buttons">
  //     {/* <Link className="login" to="/task">DEMO LOGIN</Link> */}
  //     <Link className="login" to="/login">LOGIN</Link>
  //     <Link className="signup" to="/signup">SIGN UP</Link>
  //   </div>
  // )

  // const bookbutton = props.loggedIn ? ( 
  //   <div className="book-task-button">
  //     <Link to="/task/new">
  //       <button className="session-submit" onClick={props.logout}> 
  //         Book a Task
  //       </button>
  //     </Link>
  //   </div>
  // ) : ('')
  
  const treasure = props.loggedIn ? ( 
    // <div className="treasure-hunt-button">
      <button className="category" onClick={props.logout}> 
        Treasure Hunt
      </button>
    // {/* </div> */}
  ) : ('')

  const protection = props.loggedIn ? ( 
    // <div className="protection-button">
      <button className="category" onClick={props.logout}> 
        Protection
      </button>
    // {/* </div> */}
  ) : ('')

  const monster = props.loggedIn ? ( 
    // <div className="monster-slaying-button">
      <button className="category" onClick={props.logout}> 
        Monster Slaying
      </button>
    // {/* </div> */}
  ) : ('')

  const delivery = props.loggedIn ? ( 
    // <div className="monster-slaying-button">
      <button className="category" onClick={props.logout}> 
        Delivery
      </button>
    // {/* </div> */}
  ) : ('')

  const explore = props.loggedIn ? ( 
    // <div className="monster-slaying-button">
      <button className="category" onClick={props.logout}> 
        World Exploration
      </button>
    // {/* </div> */}
  ) : ('')

  const tutor = props.loggedIn ? ( 
    // <div className="monster-slaying-button">
      <button className="category" onClick={props.logout}> 
        Tutelage
      </button>
    // {/* </div> */}
  ) : ('')

  const escort = props.loggedIn ? ( 
    // <div className="monster-slaying-button">
      <button className="category" onClick={props.logout}> 
        Escort
      </button>
    // {/* </div> */}
  ) : ('')

  const dungeon = props.loggedIn ? ( 
    // <div className="monster-slaying-button">
      <button className="category" onClick={props.logout}> 
        Dungeon Crawling
      </button>
    // {/* </div> */}
  ) : ('')

  const gather = props.loggedIn ? ( 
    // <div className="monster-slaying-button">
      <button className="category" onClick={props.logout}> 
        Item Gathering
      </button>
    // {/* </div> */}
  ) : ('')

  const threat = props.loggedIn ? ( 
    // <div className="monster-slaying-button">
      <button className="category" onClick={props.logout}> 
        Threat Management
      </button>
    // {/* </div> */}
  ) : ('')

  const odd = props.loggedIn ? ( 
    // <div className="monster-slaying-button">
      <button className="category" onClick={props.logout}> 
        Odd Jobs
      </button>
    // {/* </div> */}
  ) : ('')

  const info = props.loggedIn ? ( 
    // <div className="monster-slaying-button">
      <button className="category" onClick={props.logout}> 
        Espionage
      </button>
    // {/* </div> */}
  ) : ('')

//debugger
  return (
    <div className="main-splash-container">
          {/* <img className="wallpaper" src="https://i.imgur.com/H4Nef0z.jpg"/> */}
        <div className="wallpaper">

        <NavContainer />

          <div className="text-container">
              <h1 className="text-header">FIND THE BEST HELP</h1>
              <p className="text-body">GET HELP FROM MILLIONS OF TRUSTED TASKERS FOR EVERYTHING FROM ERRANDS TO DEFEATING DUNGEON BOSSES!</p>
            
                <div className="search-padding">
                    <div className="search-form">

                        <div className="searchbox">
                          <input type="search" id="search" placeholder="I need help with..." />
                          <Link className="searchbutton" to="/login">GET HELP TODAY</Link>
                        </div>
                    </div>
                </div>
            <br />
            <div className ="taskoptions">
              {treasure}
              {protection}
              {monster}
              {delivery}
              {explore}
              {escort}
              {dungeon}
              {gather}
              {tutor}
              {threat}
              {odd}
              {info}
            </div>

          </div>

        </div>

      <div className="rec">
          
          <Recommendations />
          </div>

        <Footer />  
    </div>
  )
}

export default Splash;