import {connect} from 'react-redux';
import { login, logout, signup, clearErrors }
  from '../../actions/session_actions';
import SessionForm from './session_form';

// map boolean value for currentUser to loggedIn prop
// pass errors array
// #TODO: set up errors array for store
const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors
});

const mapDispatchToProps = (dispatch, {formType}) => {
  return {
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    formType
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
