import Modal from 'react-modal';
import React from 'react';

const DeleteNotebookModal = ({ deleteNotebook, closeModal, notebook }) => {
  if (!notebook) {
    closeModal();
  }
  const title = (notebook.title === null) ? "Untitled" : notebook.title;
  return (
    <div className="delete-modal">
      <div className="delete-modal-message">
        Are you sure you want to delete
        <strong>{title}</strong>
          and all its notes?
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
