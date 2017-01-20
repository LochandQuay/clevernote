import React from 'react';

class TagIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.selectTag = this.selectTag.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (!this.props.currentTag && newProps.currentTag) {
      this.props.fetchTag(newProps.currentTag.id);
    }
  }

  selectTag() {
    this.props.setCurrentTag(this.props.tag);
  }

  render() {
    return (
      <div className="tag-index-item" onClick={this.selectTag}>
        <h3>{this.props.tag.name}</h3>
      </div>
    );
  }
}

export default TagIndexItem;
