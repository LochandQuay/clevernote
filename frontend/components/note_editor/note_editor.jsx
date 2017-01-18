import React from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
import RichEditorExample from './rich_text_editor';
import merge from 'lodash/merge';


class NoteEditor extends React.Component {
  constructor(props) {
    super(props);
    let title;
    let body;
    if (this.props.note) {
      title = this.props.note.title;
      body = this.props.note.body;
    }

    this.state = {
      note: this.props.note,
      title: title,
      body: body,
      author_id: this.props.user.id
      // editorState: EditorState.createEmpty()
    };
    // this.onChange = (editorState) => this.setState({editorState});
    // this.handleKeyCommand = this.handleKeyCommand.bind(this);

    this.saveNote = this.saveNote.bind(this);
    this.update = this.update.bind(this);
    // FORMATTING BINDS
  }

  componentWillReceiveProps(newProps) {
    if (newProps.note === null) {
      this.setState({
        note: newProps.note,
        title: null,
        body: null
      });
      return;
    }
    if ((!this.props.note) || (this.props.note.id !== newProps.note.id)) {
      this.setState({
        note: newProps.note,
        title: newProps.note.title,
        body: newProps.note.body
      });
    }
  }

  componentWillMount() {
    // this.setState(
      // { note: this.props.fetchNote(this.props.userId, this.props.noteId) }
    // );
  }

  // handleKeyCommand(command) {
  //   const newState =
  //     RichUtils.handleKeyCommand(this.state.editorState, command);
  //   if (newState) {
  //     this.onChange(newState);
  //     return 'handled';
  //   }
  //   return 'not-handled';
  // }

  update(field) {
    return e => this.setState({[field]: e.target.value});
  }

  saveNote(e) {
    e.preventDefault();
    if (this.state.note.id) {
      this.props.updateNote({
        title: this.state.title,
        body: this.state.body,
        author_id: this.state.author_id,
        id: this.state.note.id
      }).then(() => this.props.fetchNotes());
    }
    else {
      this.props.createNote({
        title: this.state.title,
        body: this.state.body,
        author_id: this.state.author_id
      }).then(() => this.props.fetchNotes());
    }
  }

  // FORMATTING FUNCTIONS
  // _onBoldClick() {
  //   this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  // }


  render() {
    // debugger;
    if (this.props.note) {
      return (
        <div className="note-editor">
          <div className="formatting-bar">
            <h2>Note Editor</h2>
            <ul>
              <li>
                <input
                  type="submit"
                  value="Save Note"
                  onClick={this.saveNote}
                  className="button save-note-button" />
              </li>
            </ul>
            <br />
          </div>
          <br />
            <input
              type="text"
              className="text-editor-title-input"
              placeholder="Title your note"
              onChange={this.update('title')}
              value={this.state.title} />
            <br />
            <input
              type="textarea"
              className="text-editor-input"
              placeholder="Begin your note"
              onChange={this.update('body')}
              value={this.state.body} />
            <br />
            <br />
        </div>
      );
    }
    else {
      return (<div className="note-editor"></div>);
    }
  }
}

export default NoteEditor;


// <Editor
//   editorState={this.state.editorState}
//   onChange={this.onChange}
//   handleKeyCommand={this.handleKeyCommand}
//   className="text-editor-input"
//   ref="editor" />;
