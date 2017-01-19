import React from 'react';
import Modal from 'react-modal';
import DeleteNotebookModal from './delete_notebook_modal';
// CreateNotebookModal
import DeleteNotebookModalStyle
  from '../modal_styles/delete_notebook_modal_style';
// CreateNotebookModalStyle

class NotebookIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { deleteModalOpen: false };

    this.selectNotebook = this.selectNotebook.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.openDeleteModal = this.openDeleteModal.bind(this);
    this.closeDeleteModal = this.closeDeleteModal.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (!this.props.currentNotebook && newProps.currentNotebook) {
      this.props.fetchNotebook(newProps.currentNotebook.id);
    }
  }

  openDeleteModal() {
    this.setState({ deleteModalOpen: true });
  }

  closeDeleteModal() {
    this.setState({ deleteModalOpen: false });
  }

  selectNotebook() {
    if ((this.props.currentNotebook &&
      this.props.notebook.id !== this.props.currentNotebook.id) ||
      (!this.props.currentNotebook)) {
        this.props.setCurrentNotebook(this.props.notebook);
      }
  }

  deleteHandler(e) {
    this.props.deleteNotebook(this.props.notebook.id)
      .then(() => this.props.fetchNotebooks());
    this.closeDeleteModal();
  }

  render() {
    return (
      <div className="notebook-index-item" onClick={this.selectNotebook}>
        <div
          className="delete-notebook-button"
          onClick={this.openDeleteModal}>
          <i className="fa fa-trash"></i>
        </div>
      <h3>{this.props.notebook.title}</h3>

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
            notebookTitle={this.props.notebook.title} />
        </Modal>
      </div>
    );
  }
}

export default NotebookIndexItem;
