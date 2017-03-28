import React from 'react';
import Modal from 'react-modal';
import SessionModalStyle from '../modal_styles/session_modal_style';
import SessionFormContainer from '../session_form/session_form_container';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/demo" className="button" activeClassName="current">Demo</Link>
    <Link to="/login" className="button" activeClassName="current">Log In</Link>
    <Link to="/signup" className="button" activeClassName="current">Sign Up</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
  <hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <button className="button" onClick={logout}>Log Out</button>
	</hgroup>
);

const Greeting = ({currentUser, logout}) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sessionModalOpen: false,
      formType: 'login'
    };

    this.openSessionModal = this.openSessionModal.bind(this);
    this.closeSessionModal = this.closeSessionModal.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  openSessionModal() {
    this.props.clearErrors();
    this.setState({ sessionModalOpen: true });
  }

  closeSessionModal() {
    this.props.clearErrors();
    this.setState({ sessionModalOpen: false });
  }

  handleClick(e) {
    e.preventDefault();
    const formTypeValue = e.target.value !== 0 ?
      e.target.value : e.target.attributes.name.value;
    this.setState({ formType: formTypeValue },
      () => this.openSessionModal());
  }

  demoLogin(e) {
    e.preventDefault();
    const user = { username: "eevee", password: "password" };
    this.props.login(user);
  }

  toggleMenu(e) {
    e.preventDefault();
    e.currentTarget.children[1].classList.toggle("open");
    e.currentTarget.children[1].classList.toggle("closed");
  }

  render () {
    const headerContent = this.props.currentUser ?
      personalGreeting(this.props.currentUser, this.props.logout) :
      sessionLinks();

    return (
      <div>
        <nav className="login-signup">
          <button
            className="button"
            value="login"
            onClick={this.handleClick}>
            Log In
          </button>
          <button
            className="button"
            value="signup"
            onClick={this.handleClick}>
            Sign Up
          </button>
          <button
            className="button demo-button"
            onClick={this.demoLogin}>
            Demo
          </button>
        </nav>

        <div className="hamburger-menu" onClick={this.toggleMenu}>
          <i className="fa fa-bars"></i>

          <nav className="hamburger-menu-dropdown closed">
            <ul>
              <li className="hamburger-menu-dropdown-item"
                name="signup"
                onClick={this.handleClick}>
                Sign Up
              </li>
              <li className="hamburger-menu-dropdown-item"
                name="login"
                onClick={this.handleClick}>
                Log In
              </li>
              <li className="hamburger-menu-dropdown-item"
                onClick={this.demoLogin}>
                Demo
              </li>
            </ul>
          </nav>
        </div>

        <Modal
          isOpen={this.state.sessionModalOpen}
          onRequestClose={this.closeSessionModal}
          style={ SessionModalStyle }
          className="react-modal"
          contentLabel="Session Modal">
          <SessionFormContainer formType={this.state.formType} />
        </Modal>
      </div>
    );
  }

}

export default Header;
