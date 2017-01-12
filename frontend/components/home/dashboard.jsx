import React from 'react';
import Sidebar from './sidebar';
import NoteIndex from './note_index';
import NoteEditor from './note_editor';

class Dashboard extends React.Component {

  render() {
    return (
      <div className="dashboard">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="note-index">
          <NoteIndex />
        </div>
        <div className="note-editor">
          <NoteEditor />
        </div>
      </div>
    );
  }
}

export default Dashboard;
