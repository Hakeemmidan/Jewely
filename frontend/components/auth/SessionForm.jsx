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
    // this.fillUsername = this.fillUsername.bind(this)
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

  // --------------- demo login START --------------- //

  // sleep(milliseconds) {
  //   var start = new Date().getTime();
  //   for (var i = 0; i < 1e7; i++) {
  //     if ((new Date().getTime() - start) > milliseconds) {
  //       break;
  //     }
  //   }
  // }
  // ^^^ Source: https://flaviocopes.com/javascript-sleep/
  // fillUsername(flag, usernameInputField, username) {
  //   if (flag) {
  //     setTimeout(function () {
  //       // add a letter to username
  //       usernameInputField[0].value += username.shift();
  //       // if the field does not have a suffiecent letter count
  //       if (usernameInputField[0].value.length < 'demoUser'.length) {
  //         // add the next letter
  //         this.fillUsername(true, usernameInputField, username)
  //       } else {
  //         this.fillUsername(false, usernameInputField, username)
  //       }
  //     }.bind(this), 200);

  //     return;

  //   }
  // }

  demoLogin(e) {
    e.preventDefault();
    window.location.hash = '#/login';
    const username = 'demoUser'.split('');
    // const password = '12345678'.split('');
    const usernameInputField = $('.username-input-field')
    // this.fillUsername(true, usernameInputField, username)
    function fillUsername(flag) {
      if (flag) {
        debugger // this >> undefined
        setTimeout(() => {
          debugger // this >> window
          usernameInputField[0].value += username.shift();
          if (usernameInputField[0].value.length < 'demoUser'.length) {
            fillUsername(true)
          } else {
            fillUsername(false)
          }
        }, 200);

        return;

      }
    }
    debugger // this >> SessionForm
    fillUsername(true)
  
    // $('.session-submit').click();
  }


  // --------------- demo login END --------------- //

  render() {
    return (
      <div className="login-form-container">
        <div className="login-form-box">
          <form onSubmit={this.handleSubmit}>
            Welcome to Jewely!
            <br />
            Please {this.props.formType} or {this.props.navLink}

            <button onClick={this.demoLogin}> Demo Login </button>

            {this.renderErrors()}
            <div className="login-form">
              <br />
              <label className="session-input-container">
                <p>Username</p>
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input username-input-field"
                  placeholder="username"
                />
              </label>
              <br />
              <label className="session-input-container">
                <p>Password</p>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input password-input-field"
                  placeholder="password"
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