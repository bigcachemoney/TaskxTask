import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';
import NavContainer from '../nav/nav_container';
import  Category  from "./category";
import Recommendations from "../recommendation/recommendation";
//make this page more dynamic with props

const Splash = props => {

  const treasure = props.loggedIn ? ( 
    <Link className="category" to="/task/new">
        Treasure Hunt
    </Link>
  ) : ('')

  const protection = props.loggedIn ? ( 
    <Link className="category" to="/task/new">
        Protection
    </Link>
  ) : ('')

  const monster = props.loggedIn ? ( 
    <Link className="category" to="/task/new">
        Monster Slaying
    </Link>
  ) : ('')

  const delivery = props.loggedIn ? ( 
    <Link className="category" to="/task/new">
        Delivery
    </Link>
  ) : ('')

  const explore = props.loggedIn ? ( 
    <Link className="category" to="/task/new">
        World Exploration
    </Link>
  ) : ('')

  const tutor = props.loggedIn ? ( 
    <Link className="category" to="/task/new">
        Tutelage
    </Link>
  ) : ('')

  const escort = props.loggedIn ? ( 
    <Link className="category" to="/task/new">
        Escort
    </Link>
  ) : ('')

  const dungeon = props.loggedIn ? ( 
    <Link className="category" to="/task/new">
        Dungeon Crawling
    </Link>
  ) : ('')

  const gather = props.loggedIn ? ( 
    <Link className="category" to="/task/new">
        Item Gathering
    </Link>
  ) : ('')

  const threat = props.loggedIn ? ( 
    <Link className="category" to="/task/new">
      Threat Management
    </Link>
  ) : ('')

  const odd = props.loggedIn ? ( 
    <Link className="category" to="/task/new">
      Odd Jobs
    </Link>
  ) : ('')

  const info = props.loggedIn ? ( 
    <Link className="category" to="/task/new">
      Espionage
    </Link>
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
                          <Link className="searchbutton" to="/task/new">GET HELP TODAY</Link>
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