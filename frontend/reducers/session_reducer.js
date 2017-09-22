import merge from 'lodash/merge';
import {
  RECEIVE_CURRENT_USER,
  LOGOUT,
  RECEIVE_ERRORS,
  CLEAR_ERRORS,
} from '../actions/session_actions';

const nullUser = Object.freeze({
  currentUser: null,
  errors: [],
});

const sessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  const nextState = merge({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUser: action.currentUser, errors: [] };
      // const currentUser = action.currentUser;
      // return merge({}, _nullUser, {
        // currentUser
      // });

    case LOGOUT:
      return merge({}, nullUser);

    case RECEIVE_ERRORS:
      // const errors = action.errors;
      // return merge({}, _nullUser, {
        // errors
      // });
      return { currentUser: null, errors: action.errors };

    case CLEAR_ERRORS:
      nextState.errors = [];
      // return merge({}, _nullUser);
      return nextState;

    default:
      return state;
  }
};

export default sessionReducer;
