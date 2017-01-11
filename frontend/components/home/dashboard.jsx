import React from 'react';

class Dashboard extends React.Component {

  render() {
    return (
      <div className="dashboard">
        <div className="sidebar"><h2>Sidebar</h2></div>
        <div className="notes-index"><h2>Notes Index</h2></div>
        <div className="note-editor"><h2>Note Editor</h2></div>
      </div>
    );
  }
}

export default Dashboard;
