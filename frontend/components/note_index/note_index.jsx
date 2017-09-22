import React from 'react';
import PropTypes from 'prop-types';
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
        {this.props.notes.map(note => (
          <NoteIndexItemContainer
            key={`note-index-item-${note.id}`}
            note={note}
          />
        ))}
      </ul>
    );
  }
}

NoteIndex.propTypes = {
  currentNote: PropTypes.number,
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  setCurrentNote: PropTypes.func.isRequired,
};

NoteIndex.defaultProps = {
  currentNote: null,
};

export default NoteIndex;
