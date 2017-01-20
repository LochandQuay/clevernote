import { connect } from 'react-redux';
import TagIndex from './tag_index';
import { fetchTags, createTag, setCurrentTag }
  from '../../actions/tag_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  currentTag: state.tags.currentTag,
  tags: state.tags.sortedTags
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  // fetchTags: () => dispatch(fetchTags()),
  closeTagsModal: ownProps.closeTagsModal,
  createTag: tag => dispatch(createTag(tag)),
  setCurrentTag: tag => dispatch(setCurrentTag(tag))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagIndex);
