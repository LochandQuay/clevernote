import { connect } from 'react-redux';
import NotebookIndex from './notebook_index';
import { createNotebook, setCurrentNotebook }
  from '../../actions/notebook_actions';
import { alphaSort } from '../../reducers/selectors';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  currentNotebook: state.notebooks.byId[state.notebooks.currentNotebook],
  notebooks: alphaSort(state.notebooks),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  closeNotebooksModal: ownProps.closeNotebooksModal,
  createNotebook: notebook => dispatch(createNotebook(notebook)),
  setCurrentNotebook: notebook => dispatch(setCurrentNotebook(notebook)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(NotebookIndex);
