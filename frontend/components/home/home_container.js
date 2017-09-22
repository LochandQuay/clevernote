import { connect } from 'react-redux';
import Home from './home';
import { fetchTags }
  from '../../actions/tag_actions';
import { fetchNotes } from '../../actions/note_actions';
import { fetchNotebooks } from '../../actions/notebook_actions';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
  loggedIn: Boolean(session.currentUser),
});

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchNotes()),
  fetchNotebooks: () => dispatch(fetchNotebooks()),
  fetchTags: () => dispatch(fetchTags()),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps)(Home);
