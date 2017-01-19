import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import SidebarContainer from '../sidebar/sidebar_container';
import NoteIndexContainer from '../note_index/note_index_container';
import NoteEditorContainer from '../note_editor/note_editor_container';

// import RichTextEditorContainer from '../note_editor/rich_text_editor_container';

import SplashContainer from '../splash/splash_container';



class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentNote: this.props.currentNote,
      currentNotebook: this.props.currentNotebook
    };

    this.addNote = this.addNote.bind(this);
  }

  componentDidMount() {
    this.props.fetchNotes();
    this.props.fetchNotebooks();
  }

  // componentWillUpdate() {
  //   this.props.fetchNotes()
  //   .then(userNotes => this.setState({ notes: userNotes }));
  // }

  componentWillReceiveProps(newProps) {
    this.redirectIfLoggedOut(newProps);

    if (!newProps.currentNote) {
      this.setState( { currentNote: null });
    }
    else if (!this.state.currentNote ||
      newProps.currentNote.id !== this.state.currentNote.id) {
      this.setState( { currentNote: newProps.currentNote });
    }

    if (!newProps.currentNotebook) {
      this.setState( { currentNotebook: null });
    }
    else if (!this.state.currentNotebook ||
      newProps.currentNotebook.id !== this.state.currentNotebook.id) {
      this.setState( { currentNotebook: newProps.currentNotebook });
    }

  }

  redirectIfLoggedOut(props) {
    if (!props.loggedIn) {
      hashHistory.replace("/");
    }
  }

  // #TODO: Remove when default notebook created
  addNote() {
    const notebookId = this.state.currentNotebook ?
      this.state.currentNotebook.id : this.props.notebooks[0].id;

    const blankNote =
    {
      title: "",
      body: "",
      author_id: this.props.currentUser.id,
      notebook_id: notebookId
    };
    // this.props.setCurrentNote(blankNote);
    this.setState({ currentNote: blankNote });

    // this.props.createNote(blankNote).then(() => this.props.fetchNotes());
  }

  render () {
    if (this.props.loggedIn) {
      return (
        <div className="dashboard">
          <SidebarContainer addNote={this.addNote}/>
          <NoteIndexContainer />
          <NoteEditorContainer note={this.state.currentNote}/>
        </div>
      );
    }
    else {
      return (
        <div className="main-content">
          <SplashContainer />
        </div>
      );
    }
  }
}

export default Home;
