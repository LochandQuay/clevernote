import { connect } from 'react-redux';
import TagIndex from './tag_index';
import { fetchTags, createTag, setCurrentTag }
  from '../../actions/tag_actions';

import { sortTags } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  currentTag: state.currentTag,
  tags: sortTags(state.tags)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  closeTagsModal: ownProps.closeTagsModal,
  createTag: tag => dispatch(createTag(tag)),
  setCurrentTag: tag => dispatch(setCurrentTag(tag))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagIndex);
