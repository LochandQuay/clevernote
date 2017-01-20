import React from 'react';
import Modal from 'react-modal';

class NewTagModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ""
    };

    this.update = this.update.bind(this);
    this.createTagHandler = this.createTagHandler.bind(this);
  }

  update() {
    return e => this.setState({name: e.target.value});
  }

  createTagHandler(e) {
    e.preventDefault();
    this.props.createTag(this.state)
      .then(() => this.props.closeModal())
      .then(() => this.props.fetchTags());
  }

  render() {

    return (
      <div>
        <input
          type="text"
          className="new-tag-name-input"
          placeholder="Tag Name"
          onChange={this.update()}
          value={this.state.name} />

        <button
          className="cancel-new-tag-button"
          onClick={ this.props.closeModal }>
          Cancel
        </button>
        <button
          className="create-new-tag-button"
          onClick={ this.createTagHandler }>
          Create Tag
        </button>
      </div>
    );
  }
}

export default NewTagModal;
