import React from 'react';

export class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.fillUsername = this.fillUsername.bind(this)
    this.fillPassowrd = this.fillPassowrd.bind(this)
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
      <ul className="session-errors-ul">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`} className="session-error">
            {error}
          </li>
        ))}
      </ul>
    );
  }

  // --------------- demo login START --------------- //

  fillUsername(flag, usernameInputField, username) {
    if (flag) {
      setTimeout(function () {
        // add a letter to username
        const currentLetter = username.shift();
        usernameInputField[0].value += currentLetter
        
        // if the field does not have a suffiecent letter count
        if (usernameInputField[0].value.length < 'demoUser'.length) {
          // add the next letter
          this.fillUsername(true, usernameInputField, username)
        } else {
          // otherwise, exit of recursive loop
          this.fillUsername(false, usernameInputField, username)
        }
      }.bind(this), 100);

      return;
    }
    const password = '12345678'.split('');
    const passwordInputField = $('.password-input-field')
    this.fillPassowrd(true, passwordInputField, password)
  }

  fillPassowrd(flag, passwordInputField, password) {
    if (flag) {
      setTimeout(function () {
        passwordInputField[0].value += password.shift();
        if (passwordInputField[0].value.length < '12345678'.length) {
          this.fillPassowrd(true, passwordInputField, password)
        } else {
          this.fillPassowrd(false, passwordInputField, password)
        }
      }.bind(this), 100);

      return
    }

    // The above only adds to the input field and does not change the actual state
    // so I decided to change the state at this point
    this.setState({
      username: 'demoUser',
      password: '12345678'
    })
    $('.session-submit').click();
  }
  // fillUsername, and fillPassword are inspired by: https://stackoverflow.com/a/4122317/7974948


  demoLogin(e) {
    e.preventDefault();
    window.location.hash = '#/login';
    const username = 'demoUser'.split('');
    const usernameInputField = $('.username-input-field')
    this.fillUsername(true, usernameInputField, username)
  }


  // --------------- demo login END --------------- //

  render() {
    return (
      <div className="login-form-container">
        <div className="login-form-box">
          <form onSubmit={this.handleSubmit}>
            Welcome to Jewely!
            <br />
            Please {this.props.formType} to continue
            

            {this.renderErrors()}
            <div className="login-form">
              <br />

              <label className="session-input-container">
                Username
                <br/>
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="session-textbox username-input-field"
                />
              </label>

              <br />

              <label className="session-input-container">
                  Password
                  <br/>
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="session-textbox password-input-field"
                  />
              </label>

              <br />

              <div className="session-submit" onClick={this.handleSubmit}>
                <input type="submit" value={this.props.formType} />
              </div>

              <br/>
            </div>
          </form>

          <div className="divider">
            <hr className="left" />
              OR
            <hr className="right" />
          </div>
          {/* ^^^ source: https://stackoverflow.com/a/2812819/7974948 */}
          <br />
          
          <div>
            {this.props.navLink}
          </div>

          <div className="session-form-nav-button" onClick={this.demoLogin}>
            <button className="session-form-nav-button"> 
              demo login 
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SessionForm;