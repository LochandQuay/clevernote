import Modal from 'react-modal';
import React from 'react';

const DeleteNotebookModal = ({ deleteNotebook, closeModal, notebookTitle }) => {
  const title = (notebookTitle === "") ? "Untitled" : notebookTitle;
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
        onClick={ deleteNotebook }>
        Delete
      </button>
    </div>
  );
};


export default DeleteNotebookModal;
