import React from 'react';


class TaskOptions extends React.Component {
  render() {
    return (

      <div className="">
        <div>
          <div>
            <span className="form-text">TASK OPTIONS</span>
            <br />

            <span className="options-title">How big is your task?</span>
            <br />

            <ul className="tasktime">
              <li>
              <input type="radio"/>
              <label>Small - Est. 1 hr</label>
              </li>

              <li>
              <input type="radio"/>
              <label>Medium - Est. 2-3 hrs</label>
              </li>

              <li>
              <input type="radio"/>
              <label>Large - Est. 4+ hrs</label>
              </li>
            </ul>

          </div>

          <div>             
            <span className="options-title">Vehicle Requirements</span><br />

            <ul className="vehicle-list">
              <li>
                <input type="radio"/>
                <label>Not needed for task</label>  
              </li>

              <li>
                <input type="radio"/>
                <label>Task requires a mount</label>
              </li>

              <li>
                <input type="radio"/>
                <label>Task requires a car</label>
              </li>

              <li>
                <input type="radio"/>
                <label>Task requires a large vehicle</label>
              </li>

              <li>
                <input type="radio"/>
                <label>Task requires a plane</label>
              </li>

              <li>
                <input type="radio"/>
                <label>Task requires a flying creature</label>
              </li>

              <li>
                <input type="radio"/>
                <label>Task requires a gate or portal</label>
              </li >
            </ul>
          </div> 
        </div>
      </div>

    )
  }
}

export default TaskOptions;