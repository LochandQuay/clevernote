import React from 'react';
import NoteIndexItemContainer from './note_index_item_container';

// import Modal from 'react-modal';
// import DeleteNotebookModal from '../notebooks/delete_notebook_modal';
// // CreateNotebookModal
// import DeleteNotebookModalStyle
//   from '../modal_styles/delete_notebook_modal_style';

class NoteIndex extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   notes: this.props.notes,
    //   deleteModalOpen: false
    // };

    // this.deleteHandler = this.deleteHandler.bind(this);
    // this.openDeleteModal = this.openDeleteModal.bind(this);
    // this.closeDeleteModal = this.closeDeleteModal.bind(this);
  }

  // componentWillMount() {
  //   if (this.props.currentNotebook) {
  //     this.props.fetchNotebook(this.props.currentNotebook.id);
  //   }
  // }

  // componentDidMount() {
  //   this.props.fetchNotes();
  // }

  // #TODO
  componentWillReceiveProps(props) {
    // console.log(props.notes);
    // debugger;
    // if (props.currentNotebook && !props.currentNotebook.notes) {
    //   this.props.fetchNotebook(props.currentNotebook.id);
    // }
    // else if (props.currentNotebook && props.currentNotebook.notes) {
    //   this.setState({ notes: props.currentNotebook.notes });
    // }
    // else if (props.currentTag && props.filteredNotes.length === 0) {
    //   this.props.fetchTag(props.currentTag.id);
    // }
    // else if (props.currentTag && props.filteredNotes.length > 0) {
    //   this.setState({ notes: props.filteredNotes });
    // }
    // else {
    //   this.setState({ notes: props.notes });
    // }

    if (!this.props.currentNote && props.notes.length > 0) {
      this.props.setCurrentNote(props.notes[0]);
    }
  }

  // openDeleteModal() {
  //   this.setState({ deleteModalOpen: true });
  // }
  //
  // closeDeleteModal() {
  //   this.setState({ deleteModalOpen: false });
  // }
  //
  // deleteHandler(e) {
  //   this.props.deleteNotebook(this.props.currentNotebook.id)
  //     .then(() => this.props.fetchNotes());
  //   this.closeDeleteModal();
  //   // .then(() => this.props.fetchNotebooks())
  // }
  //
  // renderFilteredNoteIndexHeader(filter) {
  //   const header = (filter === 'notebook') ?
  //     this.props.currentNotebook.title : this.props.currentTag.name;
  //   return (
  //     <div className={`${filter}-notes-header`}>
  //       <div
  //         className={`delete-${filter}-button`}
  //         onClick={this.openDeleteModal}>
  //         <i className="fa fa-trash"></i>
  //       </div>
  //       <div
  //         className={`add-${filter}-note-button`}
  //         onClick={this.props.addNote}>
  //         <i className="fa fa-plus-circle"></i>
  //       </div>
  //       <h2>{header}</h2>
  //     </div>
  //   );
  // }

  render() {
    // let filter;
    // if (this.props.currentNotebook) {
    //   filter = 'notebook';
    // }
    // else if (this.props.currentTag) {
    //   filter = 'tag';
    // }
    // const notesHeader = (filter) ?
    //   (this.renderFilteredNoteIndexHeader(filter)) : (<h2>Notes</h2>);
    //
    // const noteListItems = this.state.notes.map((note, idx) => (
    //   <li key={`note-list-item-${idx}`}>
    //     <NoteIndexItemContainer
    //       note={note}
    //       currentNotebook={this.props.currentNotebook}
    //       currentTag={this.props.currentTag} />
    //   </li>
    // ));

    // return (
    //   <div className="note-index">
    //     <div className="notes-header">
    //       {notesHeader}
    //       <h4>{this.state.notes.length} notes</h4>
    //     </div>
    //
    //     <div className="note-index-items">
    //       <ul>
    //         { noteListItems }
    //       </ul>
    //     </div>
    //
    //     <Modal
    //       isOpen={this.state.deleteModalOpen}
    //       onRequestClose={this.closeDeleteModal}
    //       className="delete-notebook-modal"
    //       shouldCloseOnOverlayClick={false}
    //       style={ DeleteNotebookModalStyle }
    //       contentLabel="Delete Notebook Modal">
    //
    //       <DeleteNotebookModal
    //         deleteNotebook={this.deleteHandler}
    //         closeModal={this.closeDeleteModal}
    //         notebook={this.props.currentNotebook} />
    //     </Modal>
    //   </div>
    // );

    return (
      <ul>
        { this.props.notes.map((note, idx) => (
          <NoteIndexItemContainer
            key={`note-index-item-${idx}`}
            note={note} />
        ))}
      </ul>
    );
  }
}

export default NoteIndex;
