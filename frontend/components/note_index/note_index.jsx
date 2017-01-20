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

  render() {
    return (
      <ul>
        { this.props.notes.map((note, idx) => (
          <NoteIndexItemContainer
            key={`note-index-item-${idx}`}
            note={note}
            notes={this.props.notes} />
        ))}
      </ul>
    );
  }
}

export default NoteIndex;
