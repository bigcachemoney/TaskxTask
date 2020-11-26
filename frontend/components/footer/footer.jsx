import React from 'react';
import { FaInstagram, FaLink } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"


class Footer extends React.Component {
  render() {
    return (

      <div className="footer">


        <div className="footer-txt">created by Ray Liang </div>
        <div className="footer-links">
          <a href="https://github.com/bigcachemoney" className="socialmedia">
            {/* <button className="github"></button> */}
            <FaGithub size="40"/>
          </a>

          <a href="https://www.linkedin.com/in/raylanliang/" className="socialmedia">
            {/* <button className="linkedin"></button> */}
            <FaLinkedin size="40"/>
          </a>

        </div>
      </div>

    )
  }
}

export default Footer;