// #TODO: Add responsive design to dashboard: hide index unless clicked on notes index in sidebar
// #TODO: Add notes index modal

import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import NoteIndexContainer from './note_index_container';
import DeleteNotebookModal from '../notebooks/delete_notebook_modal';
import DeleteNotebookModalStyle
  from '../modal_styles/delete_notebook_modal_style';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      deleteModalOpen: false,
    };

    this.deleteHandler = this.deleteHandler.bind(this);
    this.addNoteHandler = this.addNoteHandler.bind(this);
    this.openDeleteModal = this.openDeleteModal.bind(this);
    this.closeDeleteModal = this.closeDeleteModal.bind(this);
  }

  openDeleteModal() {
    this.setState({ deleteModalOpen: true });
  }

  closeDeleteModal() {
    this.setState({ deleteModalOpen: false });
  }

  deleteHandler(e) {
    e.preventDefault();
    this.props.deleteNotebook(this.props.currentNotebook.id);
    this.closeDeleteModal();
  }

  addNoteHandler(e) {
    e.preventDefault();
    const notebookId = this.props.currentNotebook ?
      this.props.currentNotebook.id : this.props.notebooks[0].id;

    const blankNote = {
      title: '',
      body: '',
      notebook_id: notebookId,
      author_id: this.props.currentUser.id,
    };

    this.props.createNote(blankNote);
  }

  render() {
    let type;
    let title;
    const notes = this.props.notes;
    const count = notes.length;

    if (this.props.currentNotebook) {
      type = 'notebook-';
      title = this.props.currentNotebook.title;
    } else if (this.props.currentTag) {
      type = 'tag-';
      title = this.props.currentTag.name;
    } else {
      type = '';
      title = 'Notes';
    }
    return (
      <div className="note-index">
        <div className={`notes-header ${type}notes-header`}>
          <div
            className={`delete-${type}button`}
            role="button"
            tabIndex={0}
            onClick={this.openDeleteModal}
          ><i className="fa fa-trash" />
          </div>
          <div
            className={`add-${type}note-button`}
            role="button"
            tabIndex={0}
            onClick={this.addNoteHandler}
          ><i className="fa fa-plus-circle" />
          </div>

          <h2>{title}</h2>
          <h4>{`${count} notes`}</h4>
        </div>

        <div className="note-index-items">
          <NoteIndexContainer
            addNote={this.addNoteHandler}
            notes={notes}
            user={this.props.currentUser}
          />
        </div>

        <Modal
          isOpen={this.state.deleteModalOpen}
          onRequestClose={this.closeDeleteModal}
          className="delete-notebook-modal"
          shouldCloseOnOverlayClick={false}
          style={DeleteNotebookModalStyle}
          contentLabel="Delete Notebook Modal"
        >

          <DeleteNotebookModal
            deleteNotebook={this.deleteHandler}
            closeModal={this.closeDeleteModal}
            notebook={this.props.currentNotebook}
          />
        </Modal>
      </div>
    );
  }
}

Index.propTypes = {
  createNote: PropTypes.func.isRequired,
  deleteNotebook: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    username: PropTypes.string,
  }).isRequired,
  currentNotebook: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    title: PropTypes.string,
    author_id: PropTypes.number,
    updated_at: PropTypes.string,
  }),
  currentTag: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  notebooks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Index.defaultProps = {
  currentNotebook: null,
  currentTag: null,
};

export default Index;
