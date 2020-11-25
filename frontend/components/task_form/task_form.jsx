import React from 'react';
import Nav from '../nav/nav_container';
import Footer from '../footer/footer';
import { FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import TaskDetails from './task_details';
import TaskOptions from './task_options';
import FormAddress from './form_address';


class TaskForm extends React.Component {
  constructor(props){
    //debugger
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

                <div className="taskform-nav-progress">

                    <div className="taskform-nav-step">
                        <div className="taskform-nav-step-top">
                            <div className="taskform-nav-empty"></div>
                            <div className="taskform-nav-num active">
                                <span>1</span>
                            </div>
                            <div className="taskform-nav-line"></div>
                        </div>
                        <div className="taskform-nav-bottom active">
                            <span>Describe your task</span>
                        </div>
                    </div>

                    <div className="taskform-nav-step">
                        <div className="taskform-nav-step-top">
                            <div className="taskform-nav-line"></div>
                            <div className="taskform-nav-num">
                                <span>2</span>
                            </div>
                            <div className="taskform-nav-line"></div>
                        </div>
                        <div className="taskform-nav-bottom">
                            <span>Browse Taskers and prices</span>
                        </div>
                    </div>

                    <div className="taskform-nav-step">
                        <div className="taskform-nav-step-top">
                            <div className="taskform-nav-line"></div>
                            <div className="taskform-nav-num">
                                <span>3</span>
                            </div>
                            <div className="taskform-nav-line"></div>
                        </div>
                        <div className="taskform-nav-bottom">
                            <span>Choose date and time</span>
                        </div>
                    </div>
                    <div className="taskform-nav-step">
                        <div className="taskform-nav-step-top">
                            <div className="taskform-nav-line"></div>
                            <div className="taskform-nav-num">
                                <span>4</span>
                            </div>
                            <div className="taskform-nav-empty"></div>
                        </div>
                        <div className="taskform-nav-bottom">
                            <span>Confirm details</span>
                        </div>
                    </div>

                </div>
            </div>

          <div className="taskform-header-bottom">
            <FaEdit /><span className="taskform-header-bottom-span">Tell us about your task. We use these details to show Taskers in your area who fit your needs.</span>
          </div>

        </div>

        <div className="taskform-middle-container">
          <div className="form-address">
            <FormAddress />
          </div>
          
          <div className="task-options">
            <TaskOptions />
          </div>

          <div className="task-details">
            <TaskDetails />
          </div>
        </div>


          <Footer />

      </div>
    )
  }
}

export default TaskForm;