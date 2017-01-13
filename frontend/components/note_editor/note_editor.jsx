import React from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';


class NoteEditor extends React.Component {
  constructor() {
    super();

    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
    this.handleKeyCommand = this.handleKeyCommand.bind(this);

    // FORMATTING BINDS
  }

  handleKeyCommand(command) {
    const newState =
      RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  // FORMATTING FUNCTIONS
  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }

  render() {
    return (
      <div className="note-editor">
        <h2>Note Editor</h2>
        <br />
        <div className="formatting-bar">
          <button onClick={this._onBoldClick.bind(this)}>Bold</button>
        </div>
        <br />
          <input
            type="text"
            className="text-editor-title-input"
            placeholder="Title your note" />
          <br />
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            handleKeyCommand={this.handleKeyCommand}
            className="text-editor-input" />
          <br />
          <input
            type="submit"
            value="Save Note"
            className="button save-note-button" />
      </div>
    );
  }
}

export default NoteEditor;
