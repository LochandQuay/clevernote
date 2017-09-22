import React from 'react';
import PropTypes from 'prop-types';

class TagIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.selectTag = this.selectTag.bind(this);
    this.selectTagHandler = this.selectTagHandler.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (!this.props.currentTag && newProps.currentTag) {
      // #TODO: Fix to be filteredNotes
      // this.props.fetchTaggedNotes(newProps.currentTag);
    }
  }

  selectTag() {
    this.props.setCurrentTag(this.props.tag);
    this.props.setCurrentNote(null);
    this.props.setCurrentNotebook(null);
    this.props.closeModal();
  }

  selectTagHandler() {
    if (!this.props.currentTag ||
      this.props.tag.id !== this.props.currentTag.id) {
      this.selectTag();
    } else {
      this.props.closeModal();
    }
  }

  render() {
    return (
      <span className="bottom-border">
        <div
          className="tag-index-item"
          role="button"
          tabIndex={0}
          onClick={this.selectTagHandler}
        >
          <h3>{this.props.tag.name}</h3>
        </div>
      </span>
    );
  }
}

TagIndexItem.propTypes = {
  currentTag: PropTypes.number,
  tag: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  setCurrentNote: PropTypes.func.isRequired,
  setCurrentNotebook: PropTypes.func.isRequired,
  setCurrentTag: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

TagIndexItem.defaultProps = {
  currentTag: null,
};

export default TagIndexItem;
