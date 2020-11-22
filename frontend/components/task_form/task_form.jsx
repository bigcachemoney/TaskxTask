import React from 'react';

class TaskForm extends React.Component {
  constructor(props){
    debugger
    super(props)
    this.state = {
        user_id: this.props.user_id,
        // address = "",
        // interests = "",
        // description = ""
    }
  }



  render (){
    <div className="form">
      <div className="form-header"></div>
        <div>
          <p>What kind assistance are you seeking?</p>
        </div>
    </div>
  }


}

export default TaskForm;