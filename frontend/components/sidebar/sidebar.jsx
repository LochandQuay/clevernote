import React from 'react';
import Modal from 'react-modal';
import NotebookIndexContainer from '../notebooks/notebook_index_container';

import { UserSettingsModalStyle }
  from '../modal_styles/user_settings_modal_style';

import { NotebookIndexModalStyle }
  from '../modal_styles/notebook_index_modal_style';

// import ReactTransitionGroup from 'react-addons-transition-group';
// import Drawer from 'react-motion-drawer';
// import {TweenMax, Power2, TimelineLite} from 'gsap';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userSettingsModalOpen: false,
      notebooksModalOpen: false,
      notebooksDrawerOpen: false,
      tagsDrawerOpen: false
    };

    // this.addNote = this.addNote.bind(this);
    // this.openNotebooksDrawer = this.openNotebooksDrawer.bind(this);
    // this.toggleNotebooksDrawer = this.toggleNotebooksDrawer.bind(this);


    this.openUserSettingsModal = this.openUserSettingsModal.bind(this);
    this.closeUserSettingsModal = this.closeUserSettingsModal.bind(this);

    this.openNotebooksModal = this.openNotebooksModal.bind(this);
    this.closeNotebooksModal = this.closeNotebooksModal.bind(this);

    this.resetToNotesIndex = this.resetToNotesIndex.bind(this);
  }

  componentDidMount() {
    this.props.fetchNotebooks();
  }

  // #TODO: revisit--probably better way to do this
  componentWillReceiveProps(props) {
    if(props.notes.length > this.props.notes.length) {
      this.props.setCurrentNote(props.notes[0]);
    }
    if(!this.props.currentNotebook && props.currentNotebook) {
      this.props.fetchNotebook(props.currentNotebook.id)
        .then(() => this.closeNotebooksModal());
    }
  }

  resetToNotesIndex() {
    this.setState({
      userSettingsModalOpen: false,
      notebooksModalOpen: false}, () => this.props.setCurrentNotebook(null));
  }

  // openNotebooksDrawer() {
  //   this.setState({ notebooksDrawerOpen: true });
  // }
  //
  // toggleNotebooksDrawer() {
  //   console.log(this.state.notebooksDrawerOpen);
  //   const toggledValue = this.state.notebooksDrawerOpen ? false : true;
  //
  //   this.setState({
  //     notebooksDrawerOpen: toggledValue
  //   });
  // }

  openUserSettingsModal() {
    this.setState({ userSettingsModalOpen: true });
  }

  closeUserSettingsModal() {
    this.setState({ userSettingsModalOpen: false });
  }

  openNotebooksModal() {
    this.setState({ notebooksModalOpen: true });
  }

  closeNotebooksModal() {
    this.setState({ notebooksModalOpen: false });
  }

  render () {
    // const drawerStyle = {
    //   background: 'white',
    //   boxShadow: 'rgba(0, 0, 0, 0.188235) 0px 10px 20px, rgba(0, 0, 0, 0.227451) 0px 6px 6px',
    //   marginTop: "-20px",
    // };
    //
    // const drawerProps = {
    //   overlayColor: 'rgba(255,255,255, 1)',
    //   drawerStyle: drawerStyle
    // };
    //
    // const notebookDrawerOffset = (this.state.notebookDrawerOpen) ? 100 : 0;

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
            onClick={this.props.addNote} >
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
            onClick={this.resetToNotesIndex} >
            <i className="fa fa-file-text"></i>
          </div>

          <div
            className="notebooks-button icon-circle sidebar-icon"
            onClick={this.openNotebooksModal} >
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
          isOpen={this.state.notebooksModalOpen}
          onRequestClose={this.closeNotebooksModal}
          style={ NotebookIndexModalStyle }
          className="react-modal"
          contentLabel="Notebook Index Modal">
          <div className="notebook-index-modal">
            <NotebookIndexContainer />
          </div>
        </Modal>

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

//
// <Drawer
//   className="notebooks-drawer"
//   open={this.state.notebooksDrawerOpen}
//   onChange={open => this.setState({ notebooksDrawerOpen: open})}
//   width={400}
//   ofset={notebookDrawerOffset} >
//   <NotebookIndexContainer />
// </Drawer>
