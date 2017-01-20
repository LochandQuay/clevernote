import React from 'react';
import { Link } from 'react-router';
import ReactQuill from 'react-quill';
import Toolbar from 'react-quill';
import TagFormContainer from './tag_form/tag_form_container';

const _quillModules = {
  toolbar: [
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
  ]
};

const _quillFormats = [
  "background", "color", "font", "size",
  "list", "bullet", "script",
  "bold", "italic", "underline", "strike",
  "blockquote", "indent", "link", "header", "align",
  "direction", "formula", "image", "video",
  "code", "code-block"
];


class NoteEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.currentNote || {
      id: 0,
      title: "",
      body: ""
      // showDropdown: false
    };
    // this.handleKeyCommand = this.handleKeyCommand.bind(this);

    // this.selectNotebook = this.selectNotebook.bind(this);
    // this.showDropdown = this.showDropdown.bind(this);
    // this.closeDropdown = this.closeDropdown.bind(this);
    this.autosaveTimer;
    this.saveHandler = this.saveHandler.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.autoSave = this.autoSave.bind(this);

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
    if (newProps.currentNote) {
      if (newProps.currentNote.id !== this.state.id) {
        if (this.props.currentNote && this.props.notebooks.length > 0) {
          clearTimeout(this.autosaveTimer);
          // if (this.props.currentNote.title !== this.state.title ||
          //   this.props.currentNote.body !== this.state.body) {
          //     this.saveHandler();
          //   }
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
    this.autosaveTimer = setTimeout(this.autoSave, 750);
  }

  updateBody(text) {
    clearTimeout(this.autosaveTimer);
    this.setState({body: text});
    this.autosaveTimer = setTimeout(this.autoSave, 750);
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

  // selectNotebook(notebook) {
  //   this.setState({
  //     notebook: notebook,
  //     notebook_id: notebook.id});
  //   this.closeDropdown();
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
    if (this.props.currentNote) {
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
              <li className="tag-form">
                <h3>Tags: </h3>
              </li>
              <li>
                <TagFormContainer note={this.props.currentNote} />
              </li>
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
              theme='snow'
              modules={_quillModules}
              formats={_quillFormats}
              toolbar={false}
              value={this.state.body}
              key="editor"
              ref='editor'
              className="quill-contents"
              bounds={`.text-editor-input`}
              onChange={this.updateBody}
              getText={this.getText}>

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
}

export default NoteEditor;
