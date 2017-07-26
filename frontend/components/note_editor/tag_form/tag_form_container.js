import { connect } from 'react-redux';
import TagForm from './tag_form';
// import { fetchTaggedNotes } from '../../../actions/note_actions';
import { createTag, fetchNoteTags, fetchTags, deleteTagging }
  from '../../../actions/tag_actions';

import { sortTags } from '../../../reducers/selectors';

const mapStateToProps = (state) => ({
  // tags: state.tags.currentNoteTags,
  tags: state.notes.byId[state.notes.currentNote].tags,
  // selectedTag: state.tags.currentTag,
  selectedTag: state.tags.byId[state.tags.currentTag],
  allTags: sortTags(state.tags)
});

const mapDispatchToProps = (dispatch) => ({
  createTag: (data) => dispatch(createTag(data)),
  // fetchNoteTags: (id) => dispatch(fetchNoteTags(id)),
  fetchTags: () => dispatch(fetchTags()),
  deleteTagging: (tagging) => dispatch(deleteTagging(tagging)),
  // fetchTaggedNotes: (tag) => dispatch(fetchTaggedNotes(tag))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagForm);
