import React from 'react';
import PropTypes from 'prop-types';

const DeleteNoteModal = ({ deleteNote, closeModal, noteTitle }) => {
  const title = (noteTitle === '') ? 'Untitled' : noteTitle;
  return (
    <div className="delete-modal">
      <div className="delete-modal-message">
        <p>
          Are you sure you want to delete
        </p>
        <p>
          <span>{title}</span>?
        </p>
      </div>
      <button
        className="delete-cancel-button"
        onClick={closeModal}
      >Cancel</button>
      <button
        className="delete-button"
        onClick={deleteNote}
      >Delete</button>
    </div>
  );
};

DeleteNoteModal.propTypes = {
  deleteNote: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  noteTitle: PropTypes.string.isRequired,
};

export default DeleteNoteModal;
