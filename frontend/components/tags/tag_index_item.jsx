import React from 'react';

class TagIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.selectTag = this.selectTag.bind(this);
    this.selectTagHandler = this.selectTagHandler.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (!this.props.currentTag && newProps.currentTag) {
      this.props.fetchTaggedNotes(newProps.currentTag);
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
      }
    else {
      this.props.closeModal();
    }
  }

  render() {
    return (
      <span className="bottom-border">
        <div className="tag-index-item" onClick={this.selectTagHandler}>
          <h3>{this.props.tag.name}</h3>
        </div>
      </span>
    );
  }
}

export default TagIndexItem;
