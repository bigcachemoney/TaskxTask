import React from 'react';
import { Link } from 'react-router-dom';

export const Category = props => {

  const treasure = props.loggedIn ? (
      // <div className="treasure-hunt-button">
      <button className="session-submit" onClick={props.logout}>
        Treasure Hunt
      </button>
      // {/* </div> */}
    ) : ('')

  const protection = props.loggedIn ? (
      // <div className="protection-button">
      <button className="session-submit" onClick={props.logout}>
        Protection
      </button>
      // {/* </div> */}
    ) : ('')

  const monster = props.loggedIn ? (
      // <div className="monster-slaying-button">
      <button className="session-submit" onClick={props.logout}>
        Monster Slaying
      </button>
      // {/* </div> */}
    ) : ('')

  const delivery = props.loggedIn ? (
      // <div className="monster-slaying-button">
      <button className="session-submit" onClick={props.logout}>
        Delivery
      </button>
      // {/* </div> */}
    ) : ('')

  const explore = props.loggedIn ? (
      // <div className="monster-slaying-button">
      <button className="session-submit" onClick={props.logout}>
        World Exploration
      </button>
      // {/* </div> */}
    ) : ('')

  const tutor = props.loggedIn ? (
      // <div className="monster-slaying-button">
      <button className="session-submit" onClick={props.logout}>
        Tutelage
      </button>
      // {/* </div> */}
    ) : ('')

  const escort = props.loggedIn ? (
      // <div className="monster-slaying-button">
      <button className="session-submit" onClick={props.logout}>
        Escort
      </button>
      // {/* </div> */}
    ) : ('')

  const dungeon = props.loggedIn ? (
      // <div className="monster-slaying-button">
      <button className="session-submit" onClick={props.logout}>
        Dungeon Crawling
      </button>
      // {/* </div> */}
    ) : ('')

  const gather = props.loggedIn ? (
      // <div className="monster-slaying-button">
      <button className="session-submit" onClick={props.logout}>
        Item Gathering
      </button>
      // {/* </div> */}
    ) : ('')

  const threat = props.loggedIn ? (
      // <div className="monster-slaying-button">
      <button className="session-submit" onClick={props.logout}>
        Threat Management
      </button>
      // {/* </div> */}
    ) : ('')

  const odd = props.loggedIn ? (
      // <div className="monster-slaying-button">
      <button className="session-submit" onClick={props.logout}>
        Odd Jobs
      </button>
      // {/* </div> */}
    ) : ('')

  const info = props.loggedIn ? (
      // <div className="monster-slaying-button">
      <button className="session-submit" onClick={props.logout}>
        Espionage
      </button>
      // {/* </div> */}
    ) : ('')

}

