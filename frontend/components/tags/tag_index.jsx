import React from 'react';
import PropTypes from 'prop-types';
import TagIndexItemContainer from './tag_index_item_container';

const TagIndex = (props) => {
  const tagListItems = props.tags.map(tag => (
    <li key={`tag-list-item-${tag.id}`}>
      <TagIndexItemContainer
        tag={tag}
        closeModal={props.closeTagsModal}
      />
    </li>
  ));

  return (
    <div className="tag-index">
      <div className="tags-header">
        <div className="refresh-button">
          <i
            className="fa fa-refresh"
            role="button"
            tabIndex={0}
            onClick={props.fetchTags}
          />
          <div className="refresh-tooltip">Refresh Tags</div>
        </div>
        <h2>Tags</h2>
        <h4>{props.tags.length} tags</h4>
      </div>

      <div className="tag-index-items">
        <ul>
          {tagListItems}
        </ul>
      </div>
    </div>
  );
};

TagIndex.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
  closeTagsModal: PropTypes.func.isRequired,
  fetchTags: PropTypes.func.isRequired,
};

export default TagIndex;

// <div className="add-tag-button">
//   <i
//     className="fa fa-plus-circle"
//     onClick={this.openNewTagModal}></i>
// </div>

// <Modal
//   isOpen={this.state.newTagModalOpen}
//   onRequestClose={this.closeNewTagModal}
//   className="new-tag-modal"
//   style={ NewTagModalStyle }
//   contentLabel="New Tag Modal">
//
//   <NewTagModal
//     createTag={this.props.createTag}
//     fetchTags={this.props.fetchTags}
//     closeModal={this.closeNewTagModal}
//     userId={this.props.currentUser.id} />
// </Modal>
