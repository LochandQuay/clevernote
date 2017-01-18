import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import SidebarContainer from '../sidebar/sidebar_container';
import NoteIndexContainer from '../note_index/note_index_container';
import NoteEditorContainer from '../note_editor/note_editor_container';

import SplashContainer from '../splash/splash_container';



class Home extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchNotes();
  }

  // componentWillUpdate() {
  //   this.props.fetchNotes()
  //   .then(userNotes => this.setState({ notes: userNotes }));
  // }

  componentWillReceiveProps(newProps) {
    // this.props.fetchNotes();
    this.redirectIfLoggedOut(newProps);
  }

  redirectIfLoggedOut(props) {
    if (!props.loggedIn) {
      hashHistory.replace("/");
    }
  }

  render () {
    if (this.props.loggedIn) {
      return (
        <div className="dashboard">
          <SidebarContainer />
          <NoteIndexContainer notes={this.props.notes} />
          <NoteEditorContainer />
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
