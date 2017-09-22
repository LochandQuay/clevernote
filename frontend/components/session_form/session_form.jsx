import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formType: this.props.formType,
      username: '',
      password: '',
      name: '',
      email: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleFormType = this.toggleFormType.bind(this);
    this.displaySignUpField = this.displaySignUpField.bind(this);
  }

  // componentWillMount() {
  //   if (this.props.demoUser) {
  //     this.props.processForm(this.props.demoUser);
  //   }
  // }

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
    } else {
      this.props.login(this.state);
    }
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  toggleFormType() {
    this.props.clearErrors();
    if (this.state.formType === 'signup') {
      this.setState({ formType: 'login' });
    } else {
      this.setState({ formType: 'signup' });
    }
  }

  displaySignUpField() {
    if (this.state.formType === 'signup') {
      return (
        <div>
          <label htmlFor="Name">
            <input
              type="text"
              placeholder="Name"
              value={this.state.name}
              onChange={this.update('name')}
            />
          </label>

          <br /><br />

          <label htmlFor="Email Address">
            <input
              type="text"
              placeholder="Email Address"
              value={this.state.email}
              onChange={this.update('email')}
            />
          </label>

          <br /><br />
        </div>
      );
    }
    return (<div />);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map(error => (
          <li key={`error-${error}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  renderFormTypeText() {
    if (this.state.formType === 'login') {
      return (
        <div
          className="toggle-form-link"
          role="button"
          tabIndex={0}
          onClick={this.toggleFormType}
        >
          <h4>Don&apos;t have an account?</h4>
          <h3>Sign Up!</h3>
        </div>
      );
    }
    return (
      <div
        className="toggle-form-link"
        role="button"
        tabIndex={0}
        onClick={this.toggleFormType}
      >
        <h4>Already have an account?</h4>
        <h3>Log in!</h3>
      </div>
    );
  }

  render() {
    const sessionText =
      (this.state.formType === 'login') ? 'Log In' : 'Sign Up';

    return (
      <div className="auth-form">
        <h2>{sessionText}</h2>

        <form onSubmit={this.handleSubmit}>

          {this.displaySignUpField()}

          <label htmlFor="Username">
            <input
              type="text"
              placeholder="Username"
              value={this.state.username}
              onChange={this.update('username')}
              onClick={this.props.clearErrors}
            />
          </label>

          <br /><br />

          <label htmlFor="Password">
            <input
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.update('password')}
              onClick={this.props.clearErrors}
            />
          </label>

          <br /><br />

          <input
            type="submit"
            value={sessionText}
            className="submit-button"
          />
        </form>

        <br />
        {this.renderErrors()}
        <br /><br />
        {this.renderFormTypeText()}
      </div>
    );
  }
}

SessionForm.propTypes = {
  formType: PropTypes.string.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  signup: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  errors: PropTypes.arrayOf(PropTypes.string).isRequired,
  router: PropTypes.shape({
    createHref: PropTypes.func,
    createKey: PropTypes.func,
    createLocation: PropTypes.func,
    createPath: PropTypes.func,
    getCurrentLocation: PropTypes.func,
    go: PropTypes.func,
    goBack: PropTypes.func,
    goForward: PropTypes.func,
    isActive: PropTypes.func,
    listen: PropTypes.func,
    listenBefore: PropTypes.func,
    location: PropTypes.object,
    params: PropTypes.object,
    push: PropTypes.func,
    replace: PropTypes.func,
    routes: PropTypes.arrayOf(PropTypes.object),
    setRouteLeaveHook: PropTypes.func,
    transitionTo: PropTypes.func,
  }).isRequired,
};

export default withRouter(SessionForm);
