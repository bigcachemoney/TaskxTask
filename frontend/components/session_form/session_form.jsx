import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    debugger
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoSubmit = this.demoSubmit.bind(this);
  }

  update(field) {
    debugger
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    debugger
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  demoSubmit(e) {
    e.preventDefault();
    const demo = { username: "demo", password: "123456", email: "demo@email.com" };
    this.props.processForm(demo);
  }

  renderErrors() {
    debugger
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    debugger
    const email = this.props.formType === 'sign up' ? (
      <label>Email:
        <input type="text"
          value={this.state.email}
          onChange={this.update('email')}
          className="login-input"
        />
      </label>
      
    ) : ( '' );
    <br />
    return (
      <div className="wallpaper">


      <div className="login-form-container">


        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br />
          
            <div>
              <Link to="/">
                <img className="logo" src="https://i.imgur.com/7FP232c.png" />
              </Link>
            </div>


          <div className="errors">
            {this.renderErrors()}
          </div>
            

          <div className="login-form">
            <br />
            {email}
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>

            <br />

            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br />
              {this.props.navLink}
            <input className="session-submit" type="submit" value={this.props.formType} />
            <br />

            <button className="session-submit" onClick={this.demoSubmit}>Demo Login</button>
          </div>
        </form>
      </div>
      </div>
    );
  }
}

export default SessionForm;
