import React from 'react';
import { hashHistory } from 'react-router';

class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      username: "",
      password: ""
    };

    this.update = this.update.bind(this);
    this.signup = this.signup.bind(this);
  }

  componentWillReceiveProps(props) {
    if (props.loggedIn) {
      hashHistory.push("/home");
    }
  }

  update(field) {
    return e => this.setState({[field]: e.target.value});
  }

  signup(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  render() {
    return (
      <div className="splash group">
        <img
          src="https://res.cloudinary.com/clevernote/image/upload/q_auto:good/v1485473434/splash.jpg"
          className="splash-image" />

        <div className="splash-signup-form">
          <form onSubmit={this.signup}>
            <label>
              <input
                className="half-field left"
                type="text"
                placeholder="Name"
                value={this.state.name}
                onChange={this.update('name')} />
            </label>

            <label>
              <input
                className="half-field right"
                type="text"
                placeholder="Email Address"
                value={this.state.email}
                onChange={this.update('email')} />
            </label>

            <br /><br />

            <label>
              <input
                type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.update('username')} />
            </label>

            <br /><br />

            <label>
              <input
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.update('password')} />
            </label>

            <br /><br />

            <input
              type="submit"
              value="Sign up for free"
              className="splash-submit-button" />
          </form>
        </div>
      </div>
    );
  }
}

export default Splash;
