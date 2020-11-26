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


            <div className="tasktime">
              {/* <li> */}
                <label>
                  <input type="radio" name="time"/>
                    Small - Est. 1 hr
                </label>
              {/* </li> */}

              {/* <li> */}
                <label>
                  <input type="radio" name="time"/>
                    Medium - Est. 2-3 hrs
                </label>
              {/* </li> */}

              {/* <li> */}
                <label>
                  <input type="radio" name="time"/>
                    Large - Est. 4+ hrs
                </label>
              {/* </li> */}

              {/* <li> */}
                <label>
                  <input type="radio" name="time"/>
                    Day(s)
                </label>
              {/* </li> */}

              {/* <li> */}
                <label>
                  <input type="radio" name="time"/>
                    Week(s)
                </label>
              {/* </li> */}
              
              {/* <li> */}
                <label>
                  <input type="radio" name="time"/>
                    Months(s)
                </label>
              {/* </li> */}

              {/* <li> */}
                <label>
                  <input type="radio" name="time"/>
                    Years(s)
                </label>
              {/* </li> */}

            </div>

          </div>
          <br />
          <div>             
            <span className="options-title">Vehicle Requirements</span><br />

            <ul className="vehicle-list">
              <li>
                <label>
                  <input type="radio" name="formoptions" value="Not needed for this task"/>
                  Not needed for this task
                </label>  
              </li>
              
              <li>
                <label>
                  <input type="radio" name="formoptions" value=""/>
                  Mount(s)
                </label>  
              </li>
              
              <li>
                <label>
                  <input type="radio" name="formoptions" value=""/>
                  Small vehicle(s)
                </label>  
              </li>
              
              <li>
                <label>
                  <input type="radio" name="formoptions" value=""/>
                  Large vehicle(s)
                </label>  
              </li>
              
              <li>
                <label>
                  <input type="radio" name="formoptions" value=""/>
                  Aircraft(s)
                </label>  
              </li>
              
              <li>
                <label>
                  <input type="radio" name="formoptions" value=""/>
                  Flying creature(s)
                </label>  
              </li>
              
              <li>
                <label>
                  <input type="radio" name="formoptions" value=""/>
                  Gate or portal
                </label>  
              </li>

            </ul>
          </div> 
        </div>
      </div>

    )
  }
}

export default TaskOptions;