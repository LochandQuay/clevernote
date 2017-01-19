import React from 'react';
import NoteIndexItemContainer from './note_index_item_container';

class NoteIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {notes: this.props.notes};
  }

  // componentWillMount() {
  //   if (this.props.currentNotebook) {
  //     this.props.fetchNotebook(this.props.currentNotebook.id);
  //   }
  // }

  componentDidMount() {
    this.props.fetchNotes();
  }

  // #TODO
  componentWillReceiveProps(props) {
    // debugger;
    if (props.currentNotebook && !props.currentNotebook.notes) {
      this.props.fetchNotebook(props.currentNotebook.id);
    }
    else if (props.currentNotebook && props.currentNotebook.notes) {
      this.setState({ notes: props.currentNotebook.notes });
    }
    else {
      this.setState({ notes: props.notes });
    }
  }

  render() {
    // const noteListItems = Object.keys(this.props.notes).map(id => (
    //   <li key={id}>
    //     <NoteIndexItemContainer key={id} note={this.props.notes[id]} />
    //   </li>
    // ));
    // debugger;

    const notesHeader = (this.props.currentNotebook) ?
      this.props.currentNotebook.title : "Notes";

    const noteListItems = this.state.notes.map((note, idx) => (
      <li key={`note-list-item-${idx}`}>
        <NoteIndexItemContainer note={note} />
      </li>
    ));

    return (
      <div className="note-index">
        <div className="notes-header">
          <h2>{notesHeader}</h2>
          <h4>{this.state.notes.length} notes</h4>
        </div>

        <div className="note-index-items">
          <ul>
            { noteListItems }
          </ul>
        </div>
      </div>
    );
  }
}

export default NoteIndex;
