import React from 'react';
import Sidebar from './sidebar';
import NoteIndexContainer from '../note_index/note_index_container';
import NoteEditorContainer from '../note_editor/note_editor_container';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { selectedNote: null };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    if (nextState.selectedNote) {
      return true;
    }
    else {
      return false;
    }
  }

  selectNote(id) {
    this.setState({selectedNote: id});
  }

  render() {
    const displayEditor = (this.state.selectedNote) ?
      (<NoteEditorContainer
        note={this.props.notes[this.state.selectedNote]} />) :
      (<div></div>);
    return (
      <div className="dashboard">
        <Sidebar />
        <NoteIndexContainer
          selectedNote={this.state.selectedNote}
          selectNote={this.selectNote.bind(this)} />
        { displayEditor }
      </div>
    );
  }
}

export default Dashboard;
