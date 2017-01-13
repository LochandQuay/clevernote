import React from 'react';
import Sidebar from './sidebar';
import NoteIndexContainer from '../note_index/note_index_container';
import NoteEditor from '../note_editor/note_editor';

class Dashboard extends React.Component {

  render() {
    return (
      <div className="dashboard">
        <Sidebar />
        <NoteIndexContainer />
        <NoteEditor />
      </div>
    );
  }
}

export default Dashboard;
