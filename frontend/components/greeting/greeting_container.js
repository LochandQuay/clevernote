import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import Header from './greeting';

// const mapStateToProps = ({ session }) => ({
//   currentUser: session.currentUser,
// });

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(null, mapDispatchToProps)(Header);
