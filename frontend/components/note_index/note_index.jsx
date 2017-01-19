import React from 'react';
import NoteIndexItemContainer from './note_index_item_container';

import Modal from 'react-modal';
import DeleteNotebookModal from '../notebooks/delete_notebook_modal';
// CreateNotebookModal
import DeleteNotebookModalStyle
  from '../modal_styles/delete_notebook_modal_style';

class NoteIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: this.props.notes,
      deleteModalOpen: false
    };

    this.deleteHandler = this.deleteHandler.bind(this);
    this.openDeleteModal = this.openDeleteModal.bind(this);
    this.closeDeleteModal = this.closeDeleteModal.bind(this);
  }

  // componentWillMount() {
  //   if (this.props.currentNotebook) {
  //     this.props.fetchNotebook(this.props.currentNotebook.id);
  //   }
  // }

  componentDidMount() {
    this.props.fetchNotes();
  }

  // #TODO
  componentWillReceiveProps(props) {
    // debugger;
    if (props.currentNotebook && !props.currentNotebook.notes) {
      this.props.fetchNotebook(props.currentNotebook.id);
    }
    else if (props.currentNotebook && props.currentNotebook.notes) {
      this.setState({ notes: props.currentNotebook.notes });
    }
    else {
      this.setState({ notes: props.notes });
    }
  }

  openDeleteModal() {
    this.setState({ deleteModalOpen: true });
  }

  closeDeleteModal() {
    this.setState({ deleteModalOpen: false });
  }

  deleteHandler(e) {
    this.props.deleteNotebook(this.props.currentNotebook.id)
      .then(() => this.props.fetchNotes());
    this.closeDeleteModal();
    // .then(() => this.props.fetchNotebooks())
  }

  renderNotebookNoteIndexHeader() {
    return (
      <div className="notebook-notes-header">
        <div
          className="delete-notebook-button"
          onClick={this.openDeleteModal}>
          <i className="fa fa-trash"></i>
        </div>
        <h2>{this.props.currentNotebook.title}</h2>
      </div>
    );
  }

  render() {
    const notesHeader = (this.props.currentNotebook) ?
      (this.renderNotebookNoteIndexHeader()) : (<h2>Notes</h2>);

    const noteListItems = this.state.notes.map((note, idx) => (
      <li key={`note-list-item-${idx}`}>
        <NoteIndexItemContainer note={note} />
      </li>
    ));

    return (
      <div className="note-index">
        <div className="notes-header">
          {notesHeader}
          <h4>{this.state.notes.length} notes</h4>
        </div>

        <div className="note-index-items">
          <ul>
            { noteListItems }
          </ul>
        </div>

        <Modal
          isOpen={this.state.deleteModalOpen}
          onRequestClose={this.closeDeleteModal}
          className="delete-notebook-modal"
          shouldCloseOnOverlayClick={false}
          style={ DeleteNotebookModalStyle }
          contentLabel="Delete Notebook Modal">

          <DeleteNotebookModal
            deleteNotebook={this.deleteHandler}
            closeModal={this.closeDeleteModal}
            notebook={this.props.currentNotebook} />
        </Modal>
      </div>
    );
  }
}

export default NoteIndex;
