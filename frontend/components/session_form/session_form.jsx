import React from 'react';
import { Link, withRouter } from 'react-router';


// PROPS PASSED:
// loggedIn, errors, formType, processForm dispatch action

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formType: this.props.formType,
      username: "", password: "", name: "", email: ""};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleFormType = this.toggleFormType.bind(this);
    this.displaySignUpField = this.displaySignUpField.bind(this);
  }

  componentWillMount() {
    if (this.props.demoUser) {
      this.props.processForm(this.props.demoUser);
    }
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push('/home');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.formType === 'signup') {
      this.props.signup(this.state);
    }
    else {
      this.props.login(this.state);
    }
  }

  update(field) {
    return e => this.setState({[field]: e.target.value});
  }

  renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

  toggleFormType() {
    this.props.clearErrors();
    if (this.state.formType === 'signup') {
      this.setState({formType: 'login'});
    }
    else {
      this.setState({formType: 'signup'});
    }
  }

  displaySignUpField() {
    if (this.state.formType === 'signup') {
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
      (this.state.formType === 'login') ? "Log In" : "Sign Up";

    const toggleFormTypeText =
      (this.state.formType === 'login') ?
      (<div className="toggle-form-link" onClick={this.toggleFormType}>
        <h4>Don't have an account?</h4><h3>Sign Up!</h3>
      </div>) :
      (<div className="toggle-form-link" onClick={this.toggleFormType}>
        <h4>Already have an account?</h4><h3>Log in!</h3>
      </div>);

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
              onChange={this.update('username')}
              onClick={this.props.clearErrors} />
          </label>

          <br /><br />

          <label>
            <input
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.update('password')}
              onClick={this.props.clearErrors} />
          </label>

          <br /><br />

          <input
            type="submit"
            value={sessionText}
            className="submit-button" />
        </form>

        <br />
        { this.renderErrors() }
        <br /><br />
          {toggleFormTypeText}
      </div>
    );
  }

}

export default withRouter(SessionForm);
