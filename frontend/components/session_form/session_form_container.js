import { connect } from 'react-redux';
import { login, signup, clearErrors }
  from '../../actions/session_actions';
import SessionForm from './session_form';

// map boolean value for currentUser to loggedIn prop
// pass errors array
// #TODO: set up errors array for store
const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors,
});

const mapDispatchToProps = (dispatch, { formType }) => ({
  signup: user => dispatch(signup(user)),
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
  formType,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(SessionForm);
