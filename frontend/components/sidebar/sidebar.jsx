import React from 'react';
import Modal from 'react-modal';
import NotebookIndexContainer from '../notebooks/notebook_index_container';
import TagIndexContainer from '../tags/tag_index_container';

import { UserSettingsModalStyle }
  from '../modal_styles/user_settings_modal_style';

import { NotebookIndexModalStyle }
  from '../modal_styles/notebook_index_modal_style';

import { TagIndexModalStyle }
  from '../modal_styles/tag_index_modal_style';

// import ReactTransitionGroup from 'react-addons-transition-group';
// import {TweenMax, Power2, TimelineLite} from 'gsap';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userSettingsModalOpen: false,
      notebooksModalOpen: false,
      tagsModalOpen: false
    };

    // this.addNote = this.addNote.bind(this);

    this.openUserSettingsModal = this.openUserSettingsModal.bind(this);
    this.closeUserSettingsModal = this.closeUserSettingsModal.bind(this);

    // this.openNotebooksModal = this.openNotebooksModal.bind(this);
    this.closeNotebooksModal = this.closeNotebooksModal.bind(this);

    // this.openTagsModal = this.openTagsModal.bind(this);
    this.closeTagsModal = this.closeTagsModal.bind(this);

    // this.resetToNotesIndex = this.resetToNotesIndex.bind(this);
    // this.resetCurrentFilters = this.resetCurrentFilters.bind(this);

    this.setCurrentNoteIfNewNote = this.setCurrentNoteIfNewNote.bind(this);
    // this.setCurrentNoteIfNewNotebook =
      // this.setCurrentNoteIfNewNotebook.bind(this);
    // this.updateIndexIfNewCurrentFilter =
      // this.updateIndexIfNewCurrentFilter.bind(this);

    this.addNoteHandler = this.addNoteHandler.bind(this);
    this.allTagsHandler = this.allTagsHandler.bind(this);
    this.allNotesHandler = this.allNotesHandler.bind(this);
    this.allNotebooksHandler = this.allNotebooksHandler.bind(this);
  }

  // componentDidMount() {
  //   this.props.fetchNotebooks();
  //   this.props.fetchTags();
  // }

  // #TODO: revisit--probably better way to do this
  componentWillReceiveProps(props) {
    this.setCurrentNoteIfNewNote(props);
    // this.updateIndexIfNewCurrentFilter(props);
  }
  //
  setCurrentNoteIfNewNote(props) {
    if (props.notes.length > this.props.notes.length) {
      this.props.setCurrentNote(props.notes[0]);
    }
  }

  // setCurrentNoteIfNewNotebook(props) {
  //   if (props.currentNotebook && props.currentNote) {
  //     if (props.currentNote.notebook) {
  //       this.props.setCurrentNote(props.currentNote.notebook.notes[0]);
  //     }
  //     else {
  //       this.props.setCurrentNote(null);
  //     }
  //   }
  // }
  //
  // updateIndexIfNewCurrentFilter(props) {
  //   if(!this.props.currentNotebook && props.currentNotebook) {
  //     this.props.fetchNotebook(props.currentNotebook.id)
  //       .then(() => this.props.setCurrentNote(null))
  //       .then(() => this.closeNotebooksModal());
  //   }
  //   else if (this.props.currentNotebook && props.currentNotebook) {
  //     if (this.props.currentNotebook.id !== props.currentNotebook.id) {
  //       this.props.fetchNotebook(props.currentNotebook.id)
  //         .then(() => this.props.setCurrentNote(null))
  //         .then(() => this.closeNotebooksModal());
  //     }
  //   }
  //   else if(!this.props.currentTag && props.currentTag) {
  //     this.props.fetchTag(props.currentTag.id)
  //       .then(() => this.props.setCurrentNote(null))
  //       .then(() => this.closeTagsModal());
  //   }
  //   else if (this.props.currentTag && props.currentTag) {
  //     if (this.props.currentTag.id !== props.currentTag.id) {
  //       this.props.fetchTag(props.currentTag.id)
  //         .then(() => this.props.setCurrentNote(null))
  //         .then(() => this.closeTagsModal());
  //     }
  //   }
  // }
  //
  // resetToNotesIndex() {
  //   this.setState({
  //     userSettingsModalOpen: false,
  //     notebooksModalOpen: false,
  //     tagsModalOpen: false}, () => this.resetCurrentFilters());
  // }
  //
  // resetCurrentFilters() {
  //   this.props.setCurrentNotebook(null);
  //   this.props.setCurrentTag(null);
  // }

  addNoteHandler(e) {
    const notebookId = this.props.currentNotebook ?
      this.props.currentNotebook.id : this.props.notebooks[0].id;

    const blankNote = {
      title: "",
      body: "",
      notebook_id: notebookId,
      author_id: this.props.currentUser.id
    };

    this.props.createNote(blankNote);
    if (this.props.currentTag) {
      this.allNotesHandler();
    }
  }

  allNotesHandler() {
    this.props.setCurrentNotebook(null);
    this.props.setCurrentTag(null);
    this.closeNotebooksModal();
    this.closeTagsModal();
    this.closeUserSettingsModal();
  }

  allNotebooksHandler() {
    const toggled = !this.state.notebooksModalOpen;

    this.setState({
      notebooksModalOpen: toggled,
      tagsModalOpen: false
    });
  }

  allTagsHandler() {
    const toggled = !this.state.tagsModalOpen;

    this.setState({
      tagsModalOpen: toggled,
      notebooksModalOpen: false
    });
  }

  openUserSettingsModal() {
    this.setState({
      userSettingsModalOpen: true,
      notebooksModalOpen: false,
      tagsModalOpen: false });
  }

  closeUserSettingsModal() {
    this.setState({ userSettingsModalOpen: false });
  }

  openNotebooksModal() {
    this.setState({
      notebooksModalOpen: true,
      userSettingsModalOpen: false,
      tagsModalOpen: false
    }, () => this.resetCurrentFilters());
  }

  closeNotebooksModal() {
    this.setState({ notebooksModalOpen: false });
  }

  openTagsModal() {
    this.setState({
      tagsModalOpen: true,
      userSettingsModalOpen: false,
      notebooksModalOpen: false
    }, () => this.resetCurrentFilters());
  }

  closeTagsModal() {
    this.setState({ tagsModalOpen: false });
  }

  render () {
    const userImageSetting = this.props.currentUser.image_url ?
    "user-image" : "default-user-icon";

    const userImageContent = this.props.currentUser.image_url ?
      (<img src={this.props.currentUser.image_url} />) :
      (<i className="fa fa-user-o"></i>);

    return (
      <div className="sidebar">
        <div className="sidebar-logo">
          <img className="sidebar-logo-image"
            src="https://res.cloudinary.com/clevernote/image/upload/v1484120473/clevernote-2_rao7v9.png"
            alt="clevernote logo" />
        </div>

        <div className="note-action-buttons">
          <div
            className="add-note icon-circle sidebar-icon"
            onClick={this.addNoteHandler} >
            <i className="fa fa-plus"></i>
          </div>

          <div
            className="search-notes icon-circle sidebar-icon" >
            <i className="fa fa-search"></i>
          </div>
        </div>

        <div className="index-buttons">
          <div
            className="notes-button icon-circle sidebar-icon"
            onClick={this.allNotesHandler} >
            <i className="fa fa-file-text"></i>
          </div>

          <div
            className="notebooks-button icon-circle sidebar-icon"
            onClick={this.allNotebooksHandler} >
            <i className="fa fa-book"></i>
          </div>

          <div
            className="tags-button icon-circle sidebar-icon"
            onClick={this.allTagsHandler} >
            <i className="fa fa-tags"></i>
          </div>
        </div>


        <div className="user-button">
          <div
            className={`sidebar-icon user-icon ${userImageSetting}`}
            onClick={this.openUserSettingsModal} >
            {userImageContent}
          </div>
        </div>

        <Modal
          onChange={isOpen => this.setState({notebooksModalOpen: isOpen})}
          isOpen={this.state.notebooksModalOpen}
          onRequestClose={this.closeNotebooksModal}
          style={ NotebookIndexModalStyle }
          className="react-modal"
          contentLabel="Notebook Index Modal">
          <div className="notebook-index-modal">
            <NotebookIndexContainer
              closeNotebooksModal={this.closeNotebooksModal} />
          </div>
        </Modal>

        <Modal
          onChange={isOpen => this.setState({tagsModalOpen: isOpen})}
          isOpen={this.state.tagsModalOpen}
          onRequestClose={this.closeTagsModal}
          style={ TagIndexModalStyle }
          className="react-modal"
          contentLabel="Tag Index Modal">
          <div className="tag-index-modal">
            <TagIndexContainer
              closeTagsModal={this.closeTagsModal}
              onClick={this.closeTagsModal} />
          </div>
        </Modal>

        <Modal
          onChange={isOpen => this.setState({userSettingsModalOpen: isOpen})}
          isOpen={this.state.userSettingsModalOpen}
          onRequestClose={this.closeUserSettingsModal}
          style={ UserSettingsModalStyle }
          className="react-modal"
          contentLabel="User Settings Modal" >
          <div className="user-settings-modal">
            <h1>{this.props.currentUser.name}</h1>
            <button
              className="user-settings-logout-button"
              onClick={() => this.props.logout()} >Log Out</button>
          </div>
        </Modal>

      </div>
    );
  }
}

export default Sidebar;

// <NotebookIndexContainer
//   closeNotebooksModal={this.closeNotebooksModal}
//   onClick={this.closeNotebooksModal} />


// <TagIndexContainer
//   closeTagsModal={this.closeTagsModal}
//   onClick={this.closeTagsModal} />



// return (
//   <div className="sidebar">
//     <div className="sidebar-logo">
//       <img className="sidebar-logo-image"
//         src="https://res.cloudinary.com/clevernote/image/upload/v1484120473/clevernote-2_rao7v9.png"
//         alt="clevernote logo" />
//     </div>
//
//     <div className="note-action-buttons">
//       <div
//         className="add-note icon-circle sidebar-icon"
//         onClick={this.props.addNote} >
//         <i className="fa fa-plus"></i>
//       </div>
//
//       <div
//         className="search-notes icon-circle sidebar-icon" >
//         <i className="fa fa-search"></i>
//       </div>
//     </div>
//
//     <div className="index-buttons">
//       <div
//         className="notes-button icon-circle sidebar-icon"
//         onClick={this.resetToNotesIndex} >
//         <i className="fa fa-file-text"></i>
//       </div>
//
//       <div
//         className="notebooks-button icon-circle sidebar-icon"
//         onClick={this.openNotebooksModal} >
//         <i className="fa fa-book"></i>
//       </div>
//
//       <div
//         className="tags-button icon-circle sidebar-icon"
//         onClick={this.openTagsModal} >
//         <i className="fa fa-tags"></i>
//       </div>
//     </div>
//
//
//     <div className="user-button">
//       <div
//         className={`sidebar-icon user-icon ${userImageSetting}`}
//         onClick={this.openUserSettingsModal} >
//         {userImageContent}
//       </div>
//     </div>
//
//     <Modal
//       isOpen={this.state.notebooksModalOpen}
//       onRequestClose={this.closeNotebooksModal}
//       style={ NotebookIndexModalStyle }
//       className="react-modal"
//       contentLabel="Notebook Index Modal">
//       <div className="notebook-index-modal">
//         <NotebookIndexContainer
//           onClick={this.closeNotebooksModal} />
//       </div>
//     </Modal>
//
//     <Modal
//       isOpen={this.state.tagsModalOpen}
//       onRequestClose={this.closeTagsModal}
//       style={ TagIndexModalStyle }
//       className="react-modal"
//       contentLabel="Tag Index Modal">
//       <div className="tag-index-modal">
//         <TagIndexContainer
//           onClick={this.closeTagsModal} />
//       </div>
//     </Modal>
//
//     <Modal
//       isOpen={this.state.userSettingsModalOpen}
//       onRequestClose={this.closeUserSettingsModal}
//       style={ UserSettingsModalStyle }
//       className="react-modal"
//       contentLabel="User Settings Modal" >
//       <div className="user-settings-modal">
//         <h1>{this.props.currentUser.name}</h1>
//         <button
//           className="user-settings-logout-button"
//           onClick={() => this.props.logout()} >Log Out</button>
//       </div>
//     </Modal>
//
//   </div>
