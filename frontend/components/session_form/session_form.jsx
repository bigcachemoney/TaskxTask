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

  componentWillUnmount() {
    this.props.removeSessionErrors;
  }

  handleSubmit(e) {
    debugger
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  demoSubmit(e) {
    e.preventDefault();
    const demo = {username: "demo", password: "123456"};
    // this.setState({username: "demo", password: "123456"});
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
    // debugger
    const email = this.props.formType === 'Sign Up' ? (
      <label>
        <input type="text"
          value={this.state.email}
          onChange={this.update('email')}
          className="login-input"
          placeholder="Email Address"
        />
      </label>
      
    ) : ( '' );

    const demoLogin = this.props.formType === 'Login' ? (
      <button className="login" onClick={this.demoSubmit}>Demo Login</button>
    ) : (''
    // <input className="session-login" type="submit" value={this.props.navLink} />
    );

      // const switchBUtton = this.props.navLink === ''

    <br />
    return (
      <div className="wallpaper2">
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br />
            <div>
              <Link to="/">
                <img className="inter-logo" src="https://i.imgur.com/7FP232c.png" />
              </Link>
            </div>
          <div className="errors">
            {this.renderErrors()}
          </div>

          <div className="login-form">
            <br />

            {email}
            <br />

            <label>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                placeholder="Username"
              />
            </label>

            <br />

            <label>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                  placeholder="Password"

              />
            </label>
            <br />
            <input className="session-login" type="submit" value={this.props.formType} />
            {/* <input className="session-login" type="submit" value={this.props.navLink} /> */}
              {/* <div className="login"> */}
                {this.props.navLink}
                {/* </div> */}
            {/* <br /> */}

            {demoLogin}
              
          </div>
        </form>
      </div>
      </div>
    );
  }
}

export default SessionForm;
