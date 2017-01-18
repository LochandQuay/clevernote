import React from 'react';
import Modal from 'react-modal';
import { UserSettingsModalStyle }
  from '../modal_styles/user_settings_modal_style';
// import Drawer from 'react-motion-drawer';


class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userSettingsModalOpen: false
    };

    this.addNote = this.addNote.bind(this);
    this.openUserSettingsModal = this.openUserSettingsModal.bind(this);
    this.closeUserSettingsModal = this.closeUserSettingsModal.bind(this);
  }

  // #TODO: revisit--probably better way to do this
  componentWillReceiveProps(props) {
    if(props.notes.length > this.props.notes.length) {
      this.props.setCurrentNote(props.notes[0]);
    }
  }

  addNote() {
    const blankNote =
    { title: "",
      body: "",
      author_id: this.props.currentUser.id };
    this.props.createNote(blankNote);
  }

  openUserSettingsModal() {
    this.setState({ userSettingsModalOpen: true });
  }

  closeUserSettingsModal() {
    this.setState({ userSettingsModalOpen: false });
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
          <h2>Logo</h2>
        </div>

        <div className="note-action-buttons">
          <div
            className="add-note icon-circle sidebar-icon"
            onClick={this.addNote} >
            <i className="fa fa-plus"></i>
          </div>

          <div
            className="search-notes icon-circle sidebar-icon" >
            <i className="fa fa-search"></i>
          </div>
        </div>

        <div className="index-buttons">
          <div
            className="notes-button icon-circle sidebar-icon" >
            <i className="fa fa-file-text"></i>
          </div>

          <div
            className="notebooks-button icon-circle sidebar-icon" >
            <i className="fa fa-book"></i>
          </div>

          <div
            className="tags-button icon-circle sidebar-icon" >
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
