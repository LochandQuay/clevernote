import { connect } from 'react-redux';
import TagForm from './tag_form';
import { createTag, deleteTagging }
  from '../../../actions/tag_actions';
import { sortTags } from '../../../reducers/selectors';

const mapStateToProps = state => ({
  tags: state.notes.byId[state.notes.currentNote].tags,
  allTags: sortTags(state.tags),
  note: state.notes.byId[state.notes.currentNote],
});

const mapDispatchToProps = dispatch => ({
  createTag: data => dispatch(createTag(data)),
  deleteTagging: tagging => dispatch(deleteTagging(tagging)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(TagForm);
