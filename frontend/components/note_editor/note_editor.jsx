import React from 'react';

import {ReactQuill, Quill} from 'quill';

// import {Editor, EditorState, RichUtils} from 'draft-js';


// import RichEditorExample from './rich_text_editor';
// import merge from 'lodash/merge';

const toolbarOptions = [
  // toggled buttons
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],

  // custom button values
  [{ 'header': 1 }, { 'header': 2 }],
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],

  // superscript/subscript
  [{ 'script': 'sub'}, { 'script': 'super' }],

  // outdent/indent
  [{ 'indent': '-1'}, { 'indent': '+1' }],

  // text direction
  [{ 'direction': 'rtl' }],

  // custom dropdown
  [{ 'size': ['small', false, 'large', 'huge'] }],
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  // dropdown with defaults from theme
  [{ 'color': [] }, { 'background': [] }],
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['clean']                                         // remove formatting button
];

// const quill = new ReactQuill('#editor', {
//   modules: {
//     toolbar: toolbarOptions
//   },
//   theme: 'snow'
// });


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
    };
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
    // debugger;
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

            <textarea
              className="text-editor-input"
              placeholder="Begin your note"
              onChange={this.update('body')}
              value={this.state.body}>
            </textarea>
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

// <ReactQuill
//   placeholder="Write your note..."
//   onChange={this.update('body')}
//   value={this.state.body}
//   ref='editor'
//   key='editor'
//   theme='snow' >
//   <ReactQuill.Toolbar
//     key="toolbar"
//     ref="toolbar"
//     items={ReactQuill.Toolbar.defaultItems} />
//
// </ReactQuill>


// <Editor
//   editorState={this.state.editorState}
//   onChange={this.onChange}
//   handleKeyCommand={this.handleKeyCommand}
//   className="text-editor-input"
//   ref="editor" />;
