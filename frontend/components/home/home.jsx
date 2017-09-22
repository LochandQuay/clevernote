import React from 'react';
import PropTypes from 'prop-types';
import { hashHistory } from 'react-router';
import SidebarContainer from '../sidebar/sidebar_container';
import NoteEditorContainer from '../note_editor/note_editor_container';
import IndexContainer from '../note_index/index_container';
import SplashContainer from '../splash/splash_container';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchNotes();
    this.props.fetchNotebooks();
    this.props.fetchTags();
  }

  componentWillReceiveProps(newProps) {
    if (!newProps.loggedIn) {
      hashHistory.replace('/');
    }
  }

  render() {
    if (this.props.loggedIn) {
      return (
        <div className="dashboard">
          <SidebarContainer />
          <IndexContainer />
          <NoteEditorContainer />
        </div>
      );
    }
    return (
      <div className="main-content">
        <SplashContainer />
      </div>
    );
  }
}

Home.propTypes = {
  fetchNotes: PropTypes.func.isRequired,
  fetchNotebooks: PropTypes.func.isRequired,
  fetchTags: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default Home;
