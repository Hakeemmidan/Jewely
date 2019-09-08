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

  demoLogin(e) {
    // e.preventDefault();
    
    window.location.hash = '#/login';


    // vvv attempt at simulating filling out a form
    
    // const username = 'demoUser'.split('');
    // const password = '12345678'.split('');
    // const usernameInputField = $('.username-input-field')
    // for (let i = 0; i < username.length; i++) {
    //   usernameInputField[0].value += username.shift()
    //   this.sleep(1000)
    // }
      

    this.setState({
      username: 'demoUser',
      password: '12345678'
    });

    

    $('.session-submit').click();
  }

  // --------------- demo login END --------------- //

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
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
    );
  }
}

export default SessionForm;