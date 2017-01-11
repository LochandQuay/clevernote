import {connect} from 'react-redux';
import {login} from '../../actions/session_actions';
import Demo from './demo';

const mapStateToProps = ({session}) => ({
  loggedOut: Boolean(!session.currentUser),
  demoUser: {username: "eevee", password: "password"}
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Demo);
