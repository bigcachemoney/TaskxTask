import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
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
    const email = this.props.formType === 'sign up' ? (
      <label>Email:
        <input type="text"
          value={this.state.email}
          onChange={this.update('email')}
          className="login-input"
        />
      </label>
    ) : ( '' );

    return (
      <div className="wallpaper">


      <div className="login-form-container">
        {/* <div>
          
        <Link to="/">
          <img className="logo" src="https://i.imgur.com/7FP232c.png" />
          </Link>
        </div> */}

        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br />

          Please {this.props.formType} or {this.props.navLink}
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
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
      </div>
    );
  }
}

export default SessionForm;
