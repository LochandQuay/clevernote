import React from 'react';
import { Link } from 'react-router';
import NoteIndexItem from './note_index_item';

class NoteIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // this.props.fetchNotes(this.props.user.id)
      // .then(userNotes => this.setState({ notes: userNotes }));
  }

  render() {
    return (
      <div className="note-index">
        <div className="notes-header">
          <h2>Notes</h2>
          <h4>{this.props.notes.length} notes</h4>
        </div>

        <div className="note-index-items">
          <ul>
            { this.props.notes.map(note => (
              <NoteIndexItem note={note} key={note.id}/>
            )) }
          </ul>
        </div>
      </div>
    );
  }
}

export default NoteIndex;
