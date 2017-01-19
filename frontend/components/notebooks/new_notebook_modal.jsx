import React from 'react';
import Modal from 'react-modal';

class NewNotebookModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      author_id: this.props.userId
    };

    this.update = this.update.bind(this);
    this.createNotebookHandler = this.createNotebookHandler.bind(this);
  }

  update(field) {
    return e => this.setState({[field]: e.target.value});
  }

  createNotebookHandler(e) {
    e.preventDefault();
    this.props.createNotebook(this.state)
      .then(() => this.props.closeModal())
      .then(() => this.props.fetchNotebooks());
  }

  render() {

    return (
      <div>
        <input
          type="text"
          className="new-notebook-title-input"
          placeholder="Notebook Title"
          onChange={this.update('title')}
          value={this.state.title} />
        <input
          type="text"
          className="new-notebook-description-input"
          placeholder="Description"
          onChange={this.update('description')}
          value={this.state.description} />

        <button
          onClick={ this.props.closeModal }>
          Cancel
        </button>
        <button
          onClick={ this.createNotebookHandler }>
          Create Notebook
        </button>
      </div>
    );
  }
}

export default NewNotebookModal;
