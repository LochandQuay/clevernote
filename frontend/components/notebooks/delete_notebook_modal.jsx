import React from 'react';
import PropTypes from 'prop-types';

const DeleteNotebookModal = ({ deleteNotebook, closeModal, notebook }) => {
  if (!notebook) {
    closeModal();
  }
  const title = (notebook.title === null) ? 'Untitled' : notebook.title;
  return (
    <div className="delete-modal">
      <div className="delete-modal-message">
        Are you sure you want to delete
        <strong>{title}</strong>
          and all its notes?
      </div>
      <button
        className="delete-cancel-button"
        onClick={closeModal}
      >Cancel</button>
      <button
        className="delete-button"
        onClick={deleteNotebook}
      >Delete</button>
    </div>
  );
};

DeleteNotebookModal.propTypes = {
  deleteNotebook: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  notebook: PropTypes.shape({
    author_id: PropTypes.number,
    description: PropTypes.string,
    id: PropTypes.number,
    title: PropTypes.string,
    updated_at: PropTypes.string,
  }).isRequired,
};

export default DeleteNotebookModal;
