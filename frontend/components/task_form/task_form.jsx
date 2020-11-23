import React from 'react';
import Nav from '../nav/nav_container';
import Footer from '../footer/footer';
import { FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom';


class TaskForm extends React.Component {
  constructor(props){
    debugger
    super(props)
    // this.state = {
    //     // user_id: this.props.user_id,
    //     // address = "",
    //     // interests = "",
    //     // description = ""
    // }
  }



  render (){
    return (
      <div className="taskform-container">
        <div className="taskform-header">
          <div className="taskform-header-top">
            <div><Link className="logolink" to="/"><img className="logo" src="https://i.imgur.com/7FP232c.png" /></Link></div>
            <ol>
              <li>Describe your task</li>
              <li>Browse Taskers and dates </li>
              <li>Confirm details</li>
            </ol>
          </div>
          <div className="taskform-header-bottom">
            <span><FaEdit />Tell us about your task. We use these details to show Taskers in your area who fit your needs.</span>
          </div>

        </div>
          <div className="taskform-middle-container">
            <div className="form-address">
              
            </div>

            <div className="task-options">

            </div>

            <div className="task-details">

            </div>
          </div>



        <Footer />
      </div>
    )
  }


}

export default TaskForm;