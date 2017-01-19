import React from 'react';
import { Link } from 'react-router';

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

    this.state = {
      note: this.props.note,
      showDropdown: false
      // title: this.props.note.title,
      // body: this.props.note.body,
      // author_id: this.props.note.author_id,
      // notebook_id: this.props.note.notebook_id
    };
    // this.handleKeyCommand = this.handleKeyCommand.bind(this);

    this.saveNote = this.saveNote.bind(this);
    this.update = this.update.bind(this);
    this.selectNotebook = this.selectNotebook.bind(this);
    this.showDropdown = this.showDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.saveNewNote = this.saveNewNote.bind(this);
    this.saveExistingNote = this.saveExistingNote.bind(this);
    // this.renderNotebookSelectorDropdown = this.renderNotebookSelectorDropdown.bind(this);

  }

  componentWillMount() {
    // if (this.props.note) {
    //   this.props.fetchNote(this.props.note.id);
    // }
    this.props.fetchNotebooks();
  }

  componentDidMount() {
    // this.props.fetchNotebooks();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.note === null) {
      this.setState({
        note: newProps.note,
        title: null,
        body: null,
        author_id: null,
        notebook_id: null
      });
      return;
    }
    if ((!this.props.note) || (this.props.note.id !== newProps.note.id)) {
      this.setState({
        note: newProps.note,
        title: newProps.note.title,
        body: newProps.note.body,
        author_id: newProps.note.author_id,
        notebook_id: newProps.note.notebook_id
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

  selectNotebook(notebook) {
    this.setState({
      notebook: notebook,
      notebook_id: notebook.id});
    this.closeDropdown();
  }

  // #TODO: Remove default notebook
  saveNote(e) {
    e.preventDefault();
    let note = {
      title: this.state.title,
      body: this.state.body,
      author_id: this.state.author_id
    };

    if (this.state.note.id) {
      note["id"] = this.state.note.id;
      this.saveExistingNote(note);
    }
    else {
      note["notebook_id"] = this.state.note.notebook_id;
      this.saveNewNote(note);
    }
  }

  saveExistingNote(note) {
    if (this.props.currentNotebook) {
      this.props.updateNote(note)
      .then(() => this.props.fetchNotes())
      .then(() => this.props.fetchNotebook(this.props.currentNotebook.id));
    }
    else {
      this.props.updateNote(note)
      .then(() => this.props.fetchNotes());
    }
  }

  saveNewNote(note) {
    if (this.props.currentNotebook) {
      this.props.createNote(note)
      .then(() => this.props.fetchNotes())
      .then(() => this.props.fetchNotebook(this.props.currentNotebook.id));
    }
    else {
      this.props.createNote(note)
      .then(() => this.props.fetchNotes());
    }
  }

  showDropdown() {
    this.setState({showDropdown: true});
  }

  closeDropdown() {
    this.setState({showDropdown: false});
  }


  renderListItems() {
    this.props.notebooks.map(notebook => (
      <div key={`notebook-selector-dropdown-${notebook.id}`}
        onClick={this.selectNotebook(notebook)}>
        { notebook.title }
      </div>
    ));
  }

  renderNotebookSelectorDropdown() {
    const selectedNotebook = (this.state.note) ?
      this.state.note.notebook : this.props.notebooks[0];
    return (
      <div
        className={
          "notebook-selector-dropdown-container" +
          (this.state.showDropdown ? "show" : "")}>
        <div
          className={
            "notebook-selector-dropdown-display" +
            (this.state.showDropdown ? "clicked" : "")}
          onClick={this.showDropdown}>
          <span>
            { selectedNotebook.title }
          </span>
          <i className="fa fa-angle-down"></i>
        </div>
        <div className="notebook-selector-dropdown-list">
          {this.renderListItems()}
        </div>
      </div>
    );
  }

  render() {
    // const selectedNotebook = (this.state.note.notebook) ?
      // this.state.note.notebook : this.props.notebooks[0];

    if (this.props.note) {
      return (
        <div className="note-editor">
          <div className="note-info">
            <ul className="note-info-items">
              <li className="note-notebook-label">
                <h3>
                  Notebook:
                  <span
                    className="notebook-selector">
                    { this.props.notebooks[0].title }
                  </span>
                </h3>
              </li>
            </ul>
          </div>

          <div className="formatting-bar">
            <ul className="formatting-bar-buttons">
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
          <br /><br />

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
