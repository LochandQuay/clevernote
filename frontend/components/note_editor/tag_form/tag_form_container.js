import { connect } from 'react-redux';
import TagForm from './tag_form';
import { createTag, fetchNoteTags, fetchTags, deleteTagging }
  from '../../../actions/tag_actions';

import { sortTags } from '../../../reducers/selectors';

const mapStateToProps = (state) => ({
  tags: state.notes.byId[state.notes.currentNote].tags,
  selectedTag: state.tags.byId[state.tags.currentTag],
  allTags: sortTags(state.tags)
});

const mapDispatchToProps = (dispatch) => ({
  createTag: (data) => dispatch(createTag(data)),
  fetchTags: () => dispatch(fetchTags()),
  deleteTagging: (tagging) => dispatch(deleteTagging(tagging)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagForm);
