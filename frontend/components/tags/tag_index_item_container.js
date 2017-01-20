import { connect } from 'react-redux';
import TagIndexItem from './tag_index_item';
import {
  setCurrentTag,
  fetchTags,
  deleteTag,
  createTag,
  fetchTag
}
  from '../../actions/tag_actions';

import { fetchNotes } from '../../actions/note_actions';

const mapStateToProps = (state) => ({
  currentTag: state.tags.currentTag,
  tags: state.tags.sortedTags
});

const mapDispatchToProps = dispatch => ({
  setCurrentTag: (tag) => dispatch(setCurrentTag(tag)),
  fetchTags: () => dispatch(fetchTags()),
  fetchTag: (id) => dispatch(fetchTag(id)),
  deleteTag: (tagId) => dispatch(deleteTag(tagId)),
  createTag: (tag) => dispatch(createTag(tag)),
  fetchNotes: () => dispatch(fetchNotes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagIndexItem);
