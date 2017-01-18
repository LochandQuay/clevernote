import {connect} from 'react-redux';
import Home from './home';
import { fetchNotes } from '../../actions/note_actions';
import { logout } from '../../actions/session_actions';

const mapStateToProps = ({session, notes}) => {
  return ({
    currentUser: session.currentUser,
    notes: notes.notes,
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
  });
};

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchNotes())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
