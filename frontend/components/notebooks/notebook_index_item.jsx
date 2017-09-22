import React from 'react';
import PropTypes from 'prop-types';

class NotebookIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.selectNotebook = this.selectNotebook.bind(this);
    this.selectNotebookHandler = this.selectNotebookHandler.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (!this.props.currentNotebook && newProps.currentNotebook) {
      this.props.fetchNotebook(newProps.currentNotebook.id);
    }
  }

  selectNotebook() {
    // if ((this.props.currentNotebook &&
    //   this.props.notebook.id !== this.props.currentNotebook.id) ||
    //   (!this.props.currentNotebook)) {
    //     this.props.setCurrentNotebook(this.props.notebook);
    //   }
    if (this.props.currentNote &&
      this.props.currentNote.notebook_id !== this.props.notebook.id) {
      this.props.setCurrentNote(null);
    }
    this.props.setCurrentNotebook(this.props.notebook);
    this.props.setCurrentTag(null);
    this.props.closeModal();
  }

  selectNotebookHandler() {
    if (!this.props.currentNotebook ||
      this.props.notebook.id !== this.props.currentNotebook.id) {
      this.selectNotebook();
    } else {
      this.props.closeModal();
    }
  }

  render() {
    return (
      <span className="bottom-border">
        <div
          className="notebook-index-item"
          role="button"
          tabIndex={0}
          onClick={this.selectNotebookHandler}
        >
          <h3>{this.props.notebook.title}</h3>
        </div>
      </span>
    );
  }
}

NotebookIndexItem.propTypes = {
  currentNote: PropTypes.number,
  currentNotebook: PropTypes.number,
  notebook: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    author_id: PropTypes.number,
    updated_at: PropTypes.string,
  }).isRequired,
  fetchNotebook: PropTypes.func.isRequired,
  setCurrentNotebook: PropTypes.func.isRequired,
  setCurrentNote: PropTypes.func.isRequired,
  setCurrentTag: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

NotebookIndexItem.defaultProps = {
  currentNotebook: null,
  currentNote: null,
};

export default NotebookIndexItem;
