import React from 'react';
import NoteIndexItemContainer from './note_index_item_container';

class NoteIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {notes: this.props.notes};
  }

  componentWillMount() {
    this.props.fetchNotes();
  }

  componentDidMount() {
    this.props.fetchNotes();
  }

  // shouldComponentUpdate(newProps, newState) {
  //   if (newProps.notes.length !== this.state.notes.length) {
  //     return true;
  //   }
  //   newProps.notes.forEach((note, idx) => {
  //     if (note.updated_at !== this.state.notes[idx].updated_at) {
  //       return true;
  //     }
  //   });
  //   return false;
  // }

  // componentWillUpdate(newProps, newState) {
  //   this.setState({ notes: newProps.notes });
  // }

  // #TODO
  componentWillReceiveProps(props) {
    this.setState({ notes: props.notes });
    // if ( !this.props.currentNote && props.notes.length > 0 ) {
    //   // this.props.setCurrentNote(props.notes[0]);
    // }
  }

  componentDidReceiveProps(newProps) {
    this.setState({notes: newProps.notes});
  }

  render() {
    // const noteListItems = Object.keys(this.props.notes).map(id => (
    //   <li key={id}>
    //     <NoteIndexItemContainer key={id} note={this.props.notes[id]} />
    //   </li>
    // ));
    // debugger;
    const noteListItems = this.state.notes.map((note, idx) => (
      <li key={`note-list-item-${idx}`}>
        <NoteIndexItemContainer note={note} />
      </li>
    ));
    return (
      <div className="note-index">
        <div className="notes-header">
          <h2>Notes</h2>
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
