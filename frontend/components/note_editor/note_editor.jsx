import React from 'react';
import { Link } from 'react-router';

import ReactQuill from 'react-quill';
import Toolbar from 'react-quill';
// import {Editor, EditorState, RichUtils} from 'draft-js';
// import RichEditorExample from './rich_text_editor';

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

  // remove formatting button
  ['clean']
];


class NoteEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.currentNote || {
      id: 0,
      title: "",
      body: ""
      // note: this.props.note,
      // showDropdown: false
      // title: this.props.note.title,
      // body: this.props.note.body,
      // author_id: this.props.note.author_id,
      // notebook_id: this.props.note.notebook_id
    };
    // this.handleKeyCommand = this.handleKeyCommand.bind(this);

    // this.saveNote = this.saveNote.bind(this);
    // this.update = this.update.bind(this);
    // this.selectNotebook = this.selectNotebook.bind(this);
    // this.showDropdown = this.showDropdown.bind(this);
    // this.closeDropdown = this.closeDropdown.bind(this);
    // this.saveNewNote = this.saveNewNote.bind(this);
    // this.saveExistingNote = this.saveExistingNote.bind(this);
    // this.createTags = this.createTags.bind(this);

    this.autosaveTimer;
    this.saveHandler = this.saveHandler.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.autoSave = this.autoSave.bind(this);


    // this.renderNotebookSelectorDropdown = this.renderNotebookSelectorDropdown.bind(this);

  }
  //
  // componentWillMount() {
  //   // if (this.props.note) {
  //   //   this.props.fetchNote(this.props.note.id);
  //   // }
  //   this.props.fetchNotebooks();
  //   if (this.props.note) {
  //     this.props.fetchNoteTags(this.props.note.id);
  //   }
  // }
  //
  // componentDidMount() {
  //   if (this.props.note) {
  //     this.saveNote(this.props.note);
  //   }
  // }

  componentWillReceiveProps(newProps) {
    // let tags = [];
    // if (newProps.noteTags) {
    //   tags = newProps.noteTags;
    // }
    // else if (newProps.currentTag) {
    //   tags = newProps.currentTag;
    // }
    //
    // if (newProps.note === null) {
    //   this.setState({
    //     note: newProps.note,
    //     title: null,
    //     body: null,
    //     author_id: null,
    //     notebook_id: null,
    //     tags: tags
    //   });
    //   return;
    // }
    // if ((!this.props.note) || (this.props.note.id !== newProps.note.id)) {
    //   this.setState({
    //     note: newProps.note,
    //     title: newProps.note.title,
    //     body: newProps.note.body,
    //     author_id: newProps.note.author_id,
    //     notebook_id: newProps.note.notebook_id,
    //     tags: tags
    //   });
    // }

    if (newProps.currentNote) {
      if (newProps.currentNote.id !== this.state.id) {
        if (this.props.currentNote && this.props.notebooks.length > 0) {
          clearTimeout(this.autosaveTimer);
        }
        this.setState(newProps.currentNote);
        this.props.fetchNoteTags(newProps.currentNote.id);
      }

      else if (newProps.currentNote.id === this.state.id) {
        if (this.props.currentNote.title !== this.state.title ||
          this.props.currentNote.body !== this.state.body) {
            this.saveHandler();
        }
      }
    }
  }

  autoSave() {
    const oldTitle = this.props.currentNote.title;
    const oldBody = this.props.currentNote.body;
    const newTitle = this.state.title;
    const newBody = this.state.body;
    if (oldTitle !== newTitle || oldBody !== newBody) {
      this.saveHandler();
    }
  }

  saveHandler(e) {
    clearTimeout(this.autosaveTimer);
    this.props.updateNote(this.state)
      .then(() => this.props.fetchNotes());
  }

  updateTitle(e) {
    clearTimeout(this.autosaveTimer);
    this.setState({title: e.currentTarget.value});
    this.autosaveTimer = setTimeout(this.autoSave, 1000);
  }

  updateBody(text) {
    clearTimeout(this.autosaveTimer);
    this.setState({body: text});
    this.autosaveTimer = setTimeout(this.autoSave, 1000);
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

  // update(field) {
  //   return e => this.setState({[field]: e.target.value});
  // }

  // selectNotebook(notebook) {
  //   this.setState({
  //     notebook: notebook,
  //     notebook_id: notebook.id});
  //   this.closeDropdown();
  // }
  //
  // // #TODO: Remove default notebook
  // saveNote(e) {
  //   if (e) {
  //     e.preventDefault();
  //   }
  //   let note = {
  //     title: this.state.title,
  //     body: this.state.body,
  //     author_id: this.state.author_id
  //   };
  //
  //   if (this.state.note.id) {
  //     note["id"] = this.state.note.id;
  //     this.saveExistingNote(note);
  //   }
  //   else {
  //     note["notebook_id"] = this.state.note.notebook_id;
  //     this.saveNewNote(note);
  //   }
  // }
  //
  // saveExistingNote(note) {
  //   console.log(this.state.tags);
  //   if (this.props.currentNotebook) {
  //     this.props.updateNote(note)
  //     .then(() => this.createTags(note))
  //     .then(() => this.props.fetchNotes())
  //     .then(() => this.props.fetchNotebook(this.props.currentNotebook.id));
  //   }
  //   else if (this.props.currentTag) {
  //     this.props.updateNote(note)
  //     .then(() => this.createTags(note))
  //     .then(() => this.props.fetchNotes())
  //     .then(() => this.props.fetchTag(this.props.currentTag.id));
  //   }
  //   else {
  //     this.props.updateNote(note)
  //     .then(() => this.createTags(note))
  //     .then(() => this.props.fetchNotes());
  //   }
  // }
  //
  // saveNewNote(note) {
  //   // debugger;
  //   if (this.props.currentNotebook) {
  //     this.props.createNote(note)
  //     .then(() => this.props.fetchNotes())
  //     .then(() => this.props.fetchNotebook(this.props.currentNotebook.id));
  //   }
  //   else if (this.props.currentTag) {
  //     this.props.createNote(note)
  //     .then(() => this.props.fetchNotes())
  //     .then(() => this.props.fetchTag(this.props.currentTag.id));
  //   }
  //   else {
  //     this.props.createNote(note)
  //     .then(() => this.props.fetchNotes());
  //   }
  // }
  //
  // createTags(note) {
  //   this.state.tags.forEach(tag => (
  //     this.createTag({name: tag.name, note_id: note.id})
  //   ));
  // }
  //
  // showDropdown() {
  //   this.setState({showDropdown: true});
  // }
  //
  // closeDropdown() {
  //   this.setState({showDropdown: false});
  // }
  //

  // renderListItems() {
  //   this.props.notebooks.map(notebook => (
  //     <div key={`notebook-selector-dropdown-${notebook.id}`}
  //       onClick={this.selectNotebook(notebook)}>
  //       { notebook.title }
  //     </div>
  //   ));
  // }
  //
  // renderNotebookSelectorDropdown() {
  //   const selectedNotebook = (this.state.note) ?
  //     this.state.note.notebook : this.props.notebooks[0];
  //   return (
  //     <div
  //       className={
  //         "notebook-selector-dropdown-container" +
  //         (this.state.showDropdown ? "show" : "")}>
  //       <div
  //         className={
  //           "notebook-selector-dropdown-display" +
  //           (this.state.showDropdown ? "clicked" : "")}
  //         onClick={this.showDropdown}>
  //         <span>
  //           { selectedNotebook.title }
  //         </span>
  //         <i className="fa fa-angle-down"></i>
  //       </div>
  //       <div className="notebook-selector-dropdown-list">
  //         {this.renderListItems()}
  //       </div>
  //     </div>
  //   );
  // }
  //
  render() {
    if (this.props.notes.length > 0) {
      return (
        <div className="note-editor">
          <div className="note-info">
            <ul className="note-info-items">
              <li className="note-notebook-label">
                <h3>
                  Notebook:
                  <span
                    className="notebook-selector">
                    {this.props.currentNote.notebook.notebook_title}
                  </span>
                </h3>
              </li>
            </ul>
          </div>

          <div className="formatting-bar">
            <ul className="formatting-bar-buttons">
            </ul>
          </div>

          <input
            type="text"
            className="text-editor-title-input"
            placeholder="Title your note"
            onChange={this.updateTitle}
            value={this.state.title} />

          <div className="text-editor-input">
            <ReactQuill
              key="editor"
              ref='editor'
              className="quill-contents"
              theme='snow'
              value={this.state.body}
              onChange={this.updateBody}
              getText={this.getText}>
              <ReactQuill.Toolbar
                key="toolbar"
                ref="toolbar"
                items={ReactQuill.Toolbar.defaultItems} />
            </ReactQuill>
          </div>

        </div>
      );
    }
    else {
      return (
        <div className="note-editor"></div>
      );
    }
  }
  // render() {
  //   // const selectedNotebook = (this.state.note.notebook) ?
  //     // this.state.note.notebook : this.props.notebooks[0];
  //   const noteNotebook = (this.props.currentNotebook) ?
  //     this.props.currentNotebook : this.props.notebooks[0];
  //
  //   if (this.props.noteCount > 0) {
  //     return (
  //       <div className="note-editor">
  //         <div className="note-info">
  //           <ul className="note-info-items">
  //             <li className="note-notebook-label">
  //               <h3>
  //                 Notebook:
  //                 <span
  //                   className="notebook-selector">
  //                   { noteNotebook.title }
  //                 </span>
  //               </h3>
  //             </li>
  //           </ul>
  //         </div>
  //
  //         <div className="formatting-bar">
  //           <ul className="formatting-bar-buttons">
  //             <li>
  //               <input
  //                 type="submit"
  //                 value="Save Note"
  //                 onClick={this.saveNote}
  //                 className="button save-note-button" />
  //             </li>
  //           </ul>
  //           <br />
  //         </div>
  //         <br />
  //         <input
  //           type="text"
  //           className="text-editor-title-input"
  //           placeholder="Title your note"
  //           onChange={this.update('title')}
  //           value={this.state.title} />
  //         <br />
  //
  //         <textarea
  //           className="text-editor-input"
  //           placeholder="Begin your note"
  //           onChange={this.update('body')}
  //           value={this.state.body}>
  //         </textarea>
  //         <br /><br />
  //
  //       </div>
  //     );
  //   }
  //   else {
  //     return (<div className="note-editor"></div>);
  //   }
  // }
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
