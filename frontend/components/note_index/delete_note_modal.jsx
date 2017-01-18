import Modal from 'react-modal';
import React from 'react';

const DeleteNoteModal = ({ deleteNote, closeModal, noteTitle }) => {
  const title = (noteTitle === "") ? "Untitled" : noteTitle;
  return (
    <div className="delete-modal">
      <div className="delete-modal-message">
        <p>
          Are you sure you want to delete <strong>{title}</strong>?
        </p>
      </div>
      <button
        className="delete-cancel-button"
        onClick={ closeModal }>
        Cancel
      </button>
      <button
        className="delete-button"
        onClick={ deleteNote }>
        Delete
      </button>
    </div>
  );
};


export default DeleteNoteModal;
