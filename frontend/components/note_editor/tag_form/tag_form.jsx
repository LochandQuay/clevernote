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
    // let tags = this.state.tags;
    // tags.splice(i, 1);
    this.props.deleteTagging({
      id: this.props.tags[i].id,
      note_id: this.props.note.id
    });
    // .then(() => this.setState({ tags }));

    // if (this.props.selectedTag) {
    //   if (this.props.selectedTag.name === this.props.tags[i].name) {
    //     // #TODO: Adjust to be filteredNotes
    //     // this.props.fetchTaggedNotes(this.props.selectedTag);
    //   }
    // }
  }

  handleAddition(tag) {
    // let tags = this.state.tags;
    this.props.createTag({
      name: tag, note_id: this.props.note.id
    });
    // .then((response) => {
    //   tags.push(response.tag);
    //   this.setState({ tags });
    // });

    // if (this.props.selectedTag) {
    //   if (this.props.selectedTag.name === tag) {
    //     // debugger;
    //     // this.props.fetchTaggedNotes(this.props.selectedTag);
    //   }
    // }

    // let tags = this.state.tags;
    // tags.push({
    //   id: tags.length + 1,
    //   name: tag
    // });
    // this.setState({tags: tags});
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
