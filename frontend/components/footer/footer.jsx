import React from 'react';
import { FontAwesome } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa"


class Footer extends React.Component {
  render() {
    return (

      <div className="footer">


        <div className="footer-txt">Created by Ray Liang </div>
        <div className="footer-links">

          <a href="https://github.com/bigcachemoney">
            <button className="github"></button>
          </a>

          <a href="https://www.linkedin.com/in/raylanliang/">
            <button className="linkedin"></button>
          </a>

          <a href="https://www.instagram.com/sizzlinwok/">
            <button className="instagram"></button>
          </a>

        </div>
      </div>

    )
  }
}

export default Footer;