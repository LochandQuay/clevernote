import React from 'react';
import TagIndexItemContainer from './tag_index_item_container';
import Modal from 'react-modal';
// import NewTagModalStyle from '../modal_styles/new_tag_modal_style';
// import NewTagModal from './new_tag_modal';

class TagIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // tags: this.props.tags
      // newTagModalOpen: false
    };

    // this.openNewTagModal = this.openNewTagModal.bind(this);
    // this.closeNewTagModal = this.closeNewTagModal.bind(this);
  }

  // componentDidMount() {
  //   this.props.fetchTags();
  // }
  //
  // componentWillReceiveProps(newProps) {
  //   this.setState({tags: newProps.tags});
  // }

  // openNewTagModal() {
  //   this.setState({newTagModalOpen: true});
  // }
  //
  // closeNewTagModal() {
  //   this.setState({newTagModalOpen: false});
  // }

  render() {
      const tagListItems = this.props.tags.map((tag, idx) => (
        <li key={`tag-list-item-${idx}`}>
          <TagIndexItemContainer tag={tag}
            closeModal={this.props.closeTagsModal} />
        </li>
      ));

      return (
        <div className="tag-index">
          <div className="tags-header">
            <h2>Tags</h2>
            <h4>{this.props.tags.length} tags</h4>
          </div>

          <div className="tag-index-items">
            <ul>
              { tagListItems }
            </ul>
          </div>

        </div>
    );
  }
}

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
