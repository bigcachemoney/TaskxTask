import React from 'react';



class TaskDetails extends React.Component {
  render() {
    return (

      <div className="">
        <div>
          <span>TELL US THE DETAILS OF YOUR TASK</span>
          <br />

          <span>Start the conversation and tell your Tasker what you need done. This helps us show you only qualified and available Taskers for the job. Don't worry, you can edit this later.</span>
          <br />

          <input type="text" />
          <br />

          <span>If you need two or more Taskers, please post additional tasks for each Tasker needed.</span>
          <br />
          
          <button>See Taskers and Prices</button>
        </div>
      </div>

    )
  }
}

export default TaskDetails;