import { connect } from 'react-redux';
import TagIndex from './tag_index';
import { fetchTags, createTag, setCurrentTag }
  from '../../actions/tag_actions';
import { sortTags } from '../../reducers/selectors';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  currentTag: state.tags.byId[state.tags.currentTag],
  tags: sortTags(state.tags),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  closeTagsModal: ownProps.closeTagsModal,
  createTag: tag => dispatch(createTag(tag)),
  setCurrentTag: tag => dispatch(setCurrentTag(tag)),
  fetchTags: () => dispatch(fetchTags()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(TagIndex);
