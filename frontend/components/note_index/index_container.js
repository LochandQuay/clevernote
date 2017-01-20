import { connect } from 'react-redux';
import Index from './index';
import { deleteNotebook } from '../../actions/notebook_actions';


// #NB: Required Props:
  // current user
  // notes
  // notebooks
  // current notebook
  // tagged notes
  // current tag
  //

// #NB will be used to set filtered notes for note index display


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  notes: state.notes.notes,
  notebooks: state.notebooks.sortedNotebooks,
  currentNotebook: state.notebooks.currentNotebook,
  currentTag: state.tags.currentTag,
  taggedNotes: state.tags.taggedNotes
});

const mapDispatchToProps = dispatch => ({
  deleteNotebook: id => dispatch(deleteNotebook(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
