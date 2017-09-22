import React from 'react';
import PropTypes from 'prop-types';

class NewNotebookModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      author_id: this.props.user.id,
    };

    this.update = this.update.bind(this);
    this.createNotebookHandler = this.createNotebookHandler.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  createNotebookHandler(e) {
    e.preventDefault();
    this.props.createNotebook(this.state)
      .then(() => this.props.closeModal())
      .then(() => this.props.closeIndexModal());
  }

  render() {
    return (
      <div>
        <input
          type="text"
          className="new-notebook-title-input"
          placeholder="Notebook Title"
          onChange={this.update('title')}
          value={this.state.title}
        />
        <input
          type="text"
          className="new-notebook-description-input"
          placeholder="Description"
          onChange={this.update('description')}
          value={this.state.description}
        />

        <button
          className="cancel-new-notebook-button"
          onClick={this.props.closeModal}
        >Cancel</button>
        <button
          className="create-new-notebook-button"
          onClick={this.createNotebookHandler}
        >Create Notebook</button>
      </div>
    );
  }
}

NewNotebookModal.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    username: PropTypes.string,
  }).isRequired,
  createNotebook: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  closeIndexModal: PropTypes.func.isRequired,
};

export default NewNotebookModal;
