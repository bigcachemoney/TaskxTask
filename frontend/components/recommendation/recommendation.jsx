import React from 'react';
import {FaStar} from 'react-icons/fa';
import {FaMedal} from 'react-icons/fa';
import {FaCheckSquare} from 'react-icons/fa';

class Recommendations extends React.Component {
  render() {
    return (

      <div>
        <div className="profile-list">
          <div className="card">
            <div className="profile">
              <div className="profile-info">
                <div className="popular-text">
                  <span className="suggestion-title">Popular in your area</span>
                </div>
                <div className="profile2">
                  <img className="hisokapic" src="https://i.redd.it/imwetx7vvll21.jpg" />
                  <br />
                  <span className="profile-name">Hisoka Morrow</span>
                </div>
                <br />
              </div>
              <div className="profile-stats">
                <div>
                  <span className="stats"><FaMedal />Elite Tasker</span>
                </div>
                <div>
                  <span className="stats"><FaCheckSquare /> 2000 Completed Tasks</span>
                </div>
                <div>
                  <span className="stats"><FaStar /> 99% Positive</span>
                </div>
              </div>
            </div>
            <div className="skills">
              <div className="skills-title">
                <span>---Top Skills---</span>
              </div>
              <div className="skills-categories">

                  <button className="skill-button">
                    <span>Threat Management</span>
                  </button>
                  <br />
                  <button className="skill-button">
                    <span>Escort</span>
                  </button>
                  <br />
                  <button className="skill-button">
                    <span>Odd Jobs</span>
                  </button>
                  <br />


              </div>
            </div>
            <div className="card-footer">
              <button className="tasker-button">View Tasker Profile</button>
            </div>
          </div>

          <div className="card">
            <div className="profile">
              <div className="profile-info">
                <div className="popular-text">
                  <span className="suggestion-title">Not popular in your area</span>
                </div>
                <div className="profile2">
                  <img className="onepunchmanpic" src="https://www.denofgeek.com/wp-content/uploads/2016/04/one_punch_man_ok.jpg?resize=620%2C382" />
                  <br />
                  <span className="profile-name">Saitama</span>
                </div>
                <br />
              </div>
              <div className="profile-stats">
                <div>
                  <span className="stats"><FaMedal />Newbie Tasker</span>
                </div>
                <div>
                  <span className="stats"><FaCheckSquare /> 50 Completed Tasks</span>
                </div>
                <div>
                  <span className="stats"><FaStar /> 0% Positive</span>
                </div>
              </div>
            </div>
            <div className="skills">
              <div className="skills-title">
                <span>---Top Skills---</span>
              </div>
              <div className="skills-categories">

                  <button className="skill-button">
                    <span>Odd Jobs</span>
                  </button>
                  <br />
                  <button className="skill-button">
                    <span>Delivery</span>
                  </button>
                  <br />
                  <button className="skill-button">
                    <span>Tutelage</span>
                  </button>
                  <br />


              </div>
            </div>
            <div className="card-footer">
              <button className="tasker-button">View Tasker Profile</button>
            </div>
          </div>

          <div className="card">
            <div className="profile">
              <div className="profile-info">
                <div className="popular-text">
                  <span className="suggestion-title">Popular in your area</span>
                </div>
                <div className="profile2">
                  <img className="gojopic" src="https://i0.wp.com/otakuorbit.com/wp-content/uploads/2020/10/0_kzlh7D6-IsD3SMCy.jpg?resize=1024%2C576&ssl=1" />
                  <br />
                  <span className="profile-name">Gojo Satoru</span>
                </div>
                <br />
              </div>
              <div className="profile-stats">
                <div>
                  <span className="stats"><FaMedal />Elite Tasker</span>
                </div>
                <div>
                  <span className="stats"><FaCheckSquare /> 9000 Completed Tasks</span>
                </div>
                <div>
                  <span className="stats"><FaStar /> 99% Positive</span>
                </div>
              </div>
            </div>
            <div className="skills">
              <div className="skills-title">
                <span>---Top Skills---</span>
              </div>
              <div className="skills-categories">

                  <button className="skill-button">
                    <span>Protection</span>
                  </button>
                  <br />
                  <button className="skill-button">
                    <span>Tutelage</span>
                  </button>
                  <br />
                  <button className="skill-button">
                    <span>Item Gathering</span>
                  </button>
                  <br />


              </div>
            </div>
            <div className="card-footer">
              <button className="tasker-button">View Tasker Profile</button>
            </div>
          </div>

          </div>
      </div>

    )
  }
}

export default Recommendations;