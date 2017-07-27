import React from 'react';
import NoteIndexItemContainer from './note_index_item_container';

class NoteIndex extends React.Component {
  componentWillReceiveProps(props) {
    if (!props.currentNote && props.notes.length > 0) {
      this.props.setCurrentNote(props.notes[0]);
    }
  }

  render() {
    return (
      <ul>
        { this.props.notes.map((note, idx) => (
          <NoteIndexItemContainer
            key={`note-index-item-${idx}`}
            note={note} />
        ))}
      </ul>
    );
  }
}

export default NoteIndex;
