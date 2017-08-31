import React from 'react';
import TagsInput from 'react-tag-input';
import { WithContext as ReactTags } from 'react-tag-input';


class TagForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tags: this.props.tags };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.note) {
      this.setState({ tags: newProps.tags });
    }
  }

  handleChange(tags) {
    this.setState({tags});
  }

  handleChangeInput(tag) {
    this.setState({tag});
  }

  handleDelete(i) {
    this.props.deleteTagging({
      id: this.props.tags[i].id,
      note_id: this.props.note.id
    });
  }

  handleAddition(tag) {
    this.props.createTag({
      name: tag, note_id: this.props.note.id
    });
  }

  render() {
    let suggestions = this.props.allTags.map(tag => tag.name);

    return (
      <div className="note-info-tags">
        <ReactTags
          tags={this.state.tags}
          suggestions={suggestions}
          minQueryLength={1}
          labelField={'name'}
          handleDelete={this.handleDelete}
          handleAddition={this.handleAddition}
          allowDeleteFromEmptyInput={true}
          />
      </div>
    );
  }
}

export default TagForm;
