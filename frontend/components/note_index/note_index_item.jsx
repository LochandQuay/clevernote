import React from 'react';
// import { Link } from 'react-router';
import Modal from 'react-modal';
import DeleteNoteModal from './delete_note_modal';
import DeleteNoteModalStyle from '../modal_styles/delete_note_modal_style';

const getTimeStamp = (lastUpdatedTime) => {
  if (lastUpdatedTime === null) {
    return "Moments ago";
  }

  const currentTime = new Date();
  const updated = new Date(lastUpdatedTime);

  const yearDiff = currentTime.getFullYear() - updated.getFullYear();
  if ( yearDiff > 0) {
    return (yearDiff === 1) ? "1 year ago" : `${yearDiff} years ago`;
  }

  const monthDiff = currentTime.getMonth() - updated.getMonth();
  if ( monthDiff > 0) {
    return (monthDiff === 1) ? "1 month ago" : `${monthDiff} months ago`;
  }

  const dateDiff = currentTime.getDate() - updated.getDate();
  if ( dateDiff > 0) {
    return (dateDiff === 1) ? "1 day ago" : `${dateDiff} days ago`;
  }

  const hourDiff = currentTime.getHours() - updated.getHours();
  if ( hourDiff > 0) {
    return (hourDiff === 1) ? "1 hour ago" : `${hourDiff} hours ago`;
  }

  const minuteDiff = currentTime.getMinutes() - updated.getMinutes();
  if ( minuteDiff > 0) {
    return (minuteDiff === 1) ? "1 minute ago" : `${minuteDiff} minutes ago`;
  }

  const secondDiff = currentTime.getSeconds() - updated.getSeconds();
  if ( secondDiff < 60) {
    return "Moments ago";
  }
};

const getBodyPreview = (body) => {

};

class NoteIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { deleteModalOpen: false };

    this.selectNote = this.selectNote.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.openDeleteModal = this.openDeleteModal.bind(this);
    this.closeDeleteModal = this.closeDeleteModal.bind(this);
  }

  openDeleteModal() {
    this.setState({ deleteModalOpen: true });
  }

  closeDeleteModal() {
    this.setState({ deleteModalOpen: false });
  }

  selectNote() {
    if ((this.props.currentNote &&
      this.props.note.id !== this.props.currentNote.id) ||
      (!this.props.currrentNote)) {
        this.props.setCurrentNote(this.props.note);
    }
  }

  deleteHandler(e){
    this.props.deleteNote(this.props.note.id)
      .then(() => this.props.fetchNotes());
    this.closeDeleteModal();
  }

  render() {

    return (
      <div className="note-index-item" onClick={this.selectNote}>
        <div
          className="delete-note-button"
          onClick={this.openDeleteModal}>
          <i className="fa fa-trash"></i>
        </div>
        <h3>{this.props.note.title}</h3>
        <h5>{getTimeStamp(this.props.note.updated_at)}</h5>
        <p>{this.props.note.body}</p>

        <Modal
          isOpen={this.state.deleteModalOpen}
          onRequestClose={this.closeDeleteModal}
          className="delete-note-modal"
          shouldCloseOnOverlayClick={false}
          style={ DeleteNoteModalStyle }
          contentLabel="Delete Note Modal">

          <DeleteNoteModal
            deleteNote={this.deleteHandler}
            closeModal={this.closeDeleteModal}
            noteTitle={this.props.note.title} />
        </Modal>
      </div>
    );
  }
}

export default NoteIndexItem;
