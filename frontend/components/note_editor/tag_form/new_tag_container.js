import { connect } from 'react-redux';
import TagForm from './new_tag';
import { fetchTags, createTag, deleteTagging }
  from '../../../actions/tag_actions';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  fetchTags: () => dispatch(fetchTags()),
  createTag: (tag) => dispatch(createTag(tag)),
  deleteTagging: (data) => dispatch(deleteTagging(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagForm);
