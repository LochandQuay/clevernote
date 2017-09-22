import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import SessionModalStyle from '../modal_styles/session_modal_style';
import SessionFormContainer from '../session_form/session_form_container';

const toggleMenu = function toggleMenu(e) {
  e.preventDefault();
  e.currentTarget.children[1].classList.toggle('open');
  e.currentTarget.children[1].classList.toggle('closed');
};

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sessionModalOpen: false,
      formType: 'login',
    };

    this.openSessionModal = this.openSessionModal.bind(this);
    this.closeSessionModal = this.closeSessionModal.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.handleClick = this.handleClick.bind(this);
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
    const user = { username: 'eevee', password: 'password' };
    this.props.login(user);
  }

  render() {
    return (
      <div>
        <nav className="login-signup">
          <button
            className="button"
            value="login"
            onClick={this.handleClick}
          >Log In</button>
          <button
            className="button"
            value="signup"
            onClick={this.handleClick}
          >Sign Up</button>
          <button
            className="button demo-button"
            onClick={this.demoLogin}
          >Demo</button>
        </nav>

        <div className="hamburger-menu" onClick={toggleMenu} role="toolbar">
          <i className="fa fa-bars" />

          <nav className="hamburger-menu-dropdown closed">
            <ul>
              <div
                className="hamburger-menu-dropdown-item"
                name="signup"
                role="button"
                tabIndex={0}
                onClick={this.handleClick}
              >Sign Up</div>
              <div
                className="hamburger-menu-dropdown-item"
                name="login"
                role="button"
                tabIndex={0}
                onClick={this.handleClick}
              >Log In</div>
              <div
                className="hamburger-menu-dropdown-item"
                role="button"
                tabIndex={0}
                onClick={this.demoLogin}
              >Demo</div>
            </ul>
          </nav>
        </div>

        <Modal
          isOpen={this.state.sessionModalOpen}
          onRequestClose={this.closeSessionModal}
          style={SessionModalStyle}
          className="react-modal"
          contentLabel="Session Modal"
        >
          <SessionFormContainer formType={this.state.formType} />
        </Modal>
      </div>
    );
  }
}

Header.propTypes = {
  clearErrors: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
};

export default Header;
