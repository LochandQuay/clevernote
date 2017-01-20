import {
  RECEIVE_CURRENT_USER,
  LOGOUT,
  RECEIVE_ERRORS,
  CLEAR_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUser: action.currentUser, errors: []};
      // const currentUser = action.currentUser;
      // return merge({}, _nullUser, {
        // currentUser
      // });

    case LOGOUT:
      return merge({}, _nullUser);

    case RECEIVE_ERRORS:
      return { currentUser: null, errors: action.errors };
      // const errors = action.errors;
      // return merge({}, _nullUser, {
        // errors
      // });

    case CLEAR_ERRORS:
      let nextState = merge({}, state);
      nextState.errors = [];
      return nextState;
      // return merge({}, _nullUser);

    default:
      return state;
  }
};

export default SessionReducer;
