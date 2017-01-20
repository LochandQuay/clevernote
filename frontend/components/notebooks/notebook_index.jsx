import React from 'react';
import NotebookIndexItemContainer from './notebook_index_item_container';
import NewNotebookModalStyle from '../modal_styles/new_notebook_modal_style';
import NewNotebookModal from './new_notebook_modal';
import Modal from 'react-modal';

class NotebookIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // notebooks: this.props.notebooks,
      newNotebookModalOpen: false
    };

    this.openNewNotebookModal = this.openNewNotebookModal.bind(this);
    this.closeNewNotebookModal = this.closeNewNotebookModal.bind(this);
  }

  // componentDidMount() {
  //   this.props.fetchNotebooks();
  // }
  //
  // componentWillReceiveProps(newProps) {
  //   this.setState({notebooks: newProps.notebooks});
  // }

  openNewNotebookModal() {
    this.setState({newNotebookModalOpen: true});
  }

  closeNewNotebookModal() {
    this.setState({newNotebookModalOpen: false});
  }

  render() {
      // const notebookListItems = this.state.notebooks.map((notebook, idx) => (
      //   <li key={`notebook-list-item-${idx}`}>
      //     <NotebookIndexItemContainer notebook={notebook} />
      //   </li>
      // ));
      const notebookListItems = this.props.notebooks.map((notebook, idx) => (
        <li key={`notebook-list-item-${idx}`}>
          <NotebookIndexItemContainer notebook={notebook}
            closeModal={this.props.closeNotebooksModal} />
        </li>
      ));

      return (
        <div className="notebook-index">
          <div className="notebooks-header">
            <div className="add-notebook-button">
              <i
                className="fa fa-plus-circle"
                onClick={this.openNewNotebookModal}></i>
            </div>
            <h2>Notebooks</h2>
            <h4>{this.props.notebooks.length} notebooks</h4>
          </div>

          <div className="notebook-index-items">
            <ul>
              { notebookListItems }
            </ul>
          </div>

          <Modal
            isOpen={this.state.newNotebookModalOpen}
            onRequestClose={this.closeNewNotebookModal}
            className="new-notebook-modal"
            style={ NewNotebookModalStyle }
            contentLabel="New Notebook Modal">

            <NewNotebookModal
              createNotebook={this.props.createNotebook}
              closeIndexModal={this.props.closeNotebooksModal}
              closeModal={this.closeNewNotebookModal}
              user={this.props.currentUser} />
          </Modal>
        </div>
    );
  }
}

export default NotebookIndex;
