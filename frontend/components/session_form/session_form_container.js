import {connect} from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

// map boolean value for currentUser to loggedIn prop
// pass errors array
// #TODO: set up errors array for store
const mapStateToProps = ({session}) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

// get formType from router location, slicing off '/'
// get processForm action from formType
const mapDispatchToProps = (dispatch, {location}) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;

  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
