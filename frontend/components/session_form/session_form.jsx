import React from 'react';
import { Link, withRouter } from 'react-router';


// PROPS PASSED:
// loggedIn, errors, formType, processForm dispatch action

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {username: "", password: "", name: "", email: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.displaySignUpField = this.displaySignUpField.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push('/');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.props.processForm(this.state);
  }

  update(field) {
    return e => this.setState({[field]: e.target.value});
  }

  displaySignUpField() {
    if (this.props.formType === 'signup') {
      return (
        <div>
          <label>
            <input
              type="text"
              placeholder="Name"
              value={this.state.name}
              onChange={this.update('name')} />
          </label>

          <br /><br />

            <label>
              <input
                type="text"
                placeholder="Email Address"
                value={this.state.email}
                onChange={this.update('email')} />
            </label>

            <br /><br />
        </div>
      );
    }
    else {
      return (<div></div>);
    }
  }

  render() {
    const sessionText =
      (this.props.formType === 'login') ? "Log In" : "Sign Up";

    const toggleFormTypeText =
      (this.props.formType === 'login') ?
      "Don't have an account? Sign up!" :
      "Already have an account? Log in!";

    const toggleFormTypeLink =
      (this.props.formType === 'login') ? '/signup' : '/login';

    return (
      <div className = "auth-form">
        <h2>{sessionText}</h2>

        <form onSubmit={this.handleSubmit}>

          {this.displaySignUpField()}

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
            value={sessionText}
            className="submit-button" />
        </form>

        <br /><br />
        <Link to={toggleFormTypeLink}>{toggleFormTypeText}</Link>
      </div>
    );
  }

}

export default withRouter(SessionForm);
