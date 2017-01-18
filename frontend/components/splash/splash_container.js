import { connect } from 'react-redux';
import Splash from './splash';
import { login, logout, clearErrors } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
  loggedIn: Boolean(session.currentUser)
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
