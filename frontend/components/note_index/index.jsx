import React from 'react';
import Modal from 'react-modal';
import NoteIndexContainer from './note_index_container';
import DeleteNotebookModal from '../notebooks/delete_notebook_modal';
import DeleteNotebookModalStyle
  from '../modal_styles/delete_notebook_modal_style';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      deleteModalOpen: false
    };

    this.deleteHandler = this.deleteHandler.bind(this);
    this.addNoteHandler = this.addNoteHandler.bind(this);
    this.openDeleteModal = this.openDeleteModal.bind(this);
    this.closeDeleteModal = this.closeDeleteModal.bind(this);
  }

  componentWillReceiveProps(props) {
    // console.log(props);
  }

  openDeleteModal() {
    this.setState({ deleteModalOpen: true });
  }

  closeDeleteModal() {
    this.setState({ deleteModalOpen: false });
  }

  deleteHandler(e) {
    this.props.deleteNotebook(this.props.currentNotebook.id);
    this.closeModal();
  }

  addNoteHandler(e) {
    e.preventDefault();
  }

  render() {
    let type;
    let count;
    let title;
    let notes = this.props.notes;

    if (this.props.currentNotebook) {
      type = "notebook-";
      title = this.props.currentNotebook.title;
      notes = notes.filter(
        (note) => note.notebook_id === this.props.currentNotebook.id);
      count = notes.length;
    }
    else if (this.props.currentTag) {
      type = "tag-";
      title = this.props.currentTag.name;
      notes = this.props.taggedNotes;
      count = notes.length;
    }
    else {
      type="";
      title = "Notes";
      count = this.props.notes.length;
    }

    return (
      <div className="note-index">
        <div className={`notes-header ${type}notes-header`}>
          <div className={`delete-${type}button`}
            onClick={this.openDeleteModal}>
            <i className="fa fa-trash"></i>
          </div>
          <div className={`add-${type}note-button`}
            onClick={this.props.addNoteHandler}>
            <i className="fa fa-plus-circle"></i>
          </div>

          <h2>{ title }</h2>
          <h4>{`${count} notes`}</h4>
        </div>

        <div className="note-index-items">
          <NoteIndexContainer
            notes={ notes }
            user={ this.props.currentUser } />
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

export default Index;
