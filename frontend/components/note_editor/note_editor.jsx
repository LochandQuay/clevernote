import React from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import TagFormContainer from './tag_form/tag_form_container';

const quillModules = {
  toolbar: [
    // toggled buttons
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],

    // custom button values
    [{ list: 'ordered' }, { list: 'bullet' }],

    // superscript/subscript
    [{ script: 'sub' }, { script: 'super' }],

    // outdent/indent
    [{ indent: '-1' }, { indent: '+1' }],
    [{ align: [] }],

    // text direction
    // [{ 'direction': 'rtl' }],

    // custom dropdown
    [{ font: [] }],
    [{ size: ['small', false, 'large', 'huge'] }],

    // dropdown with defaults from theme
    [{ header: 1 }, { header: 2 }],
    [{ color: [] }, { background: [] }],

    // remove formatting button
    // ['clean']
  ],
};

const quillFormats = [
  'background', 'color', 'font', 'size',
  'list', 'bullet', 'script',
  'bold', 'italic', 'underline', 'strike',
  'blockquote', 'indent', 'link', 'header', 'align',
  // 'direction', 'formula', 'image', 'video',
  'code', 'code-block',
];


class NoteEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.currentNote || {
      id: 0,
      title: '',
      body: '',
    };

    // this.autosaveTimer;
    this.saveHandler = this.saveHandler.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.autoSave = this.autoSave.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.currentNote && !newProps.currentNote.notebook) {
      // this.props.fetchNote(newProps.currentNote.id);
    }
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
        // this.props.fetchNoteTags(newProps.currentNote.id);
      }
      //
      // else if (newProps.currentNote.id === this.state.id) {
      //   // debugger;
      //   if (newProps.currentNote.title !== this.state.title ||
      //     newProps.currentNote.body !== this.state.body) {
      //       this.saveHandler();
      //   }
      // }
    }
    this.autosaveTimer = setTimeout(this.autoSave, 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.autosaveTimer);
    this.props.updateNote(this.state);
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

  saveHandler() {
    clearTimeout(this.autosaveTimer);
    this.props.updateNote(this.state).then(note => this.setState(note));
    this.autosaveTimer = setTimeout(this.autoSave, 1000);
  }

  updateTitle(e) {
    clearTimeout(this.autosaveTimer);
    this.setState({ title: e.currentTarget.value });
    this.autosaveTimer = setTimeout(this.autoSave, 1000);
  }

  updateBody(text) {
    clearTimeout(this.autosaveTimer);
    this.setState({ body: text });
    this.autosaveTimer = setTimeout(this.autoSave, 1000);
  }

  render() {
    if (this.props.currentNote) {
      return (
        <div className="note-editor">
          <div className="note-info">
            <ul className="note-info-items">
              <li className="note-notebook-label">
                <h3>
                  Notebook:
                  <span className="notebook-selector">
                    {this.props.currentNote.notebook.title}
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
            value={this.state.title}
          />

          <div className="text-editor-input">
            <ReactQuill
              theme="snow"
              modules={quillModules}
              formats={quillFormats}
              toolbar={false}
              value={this.state.body}
              key="editor"
              ref={(ref) => { this.editor = ref; }}
              className="quill-contents"
              bounds={'.text-editor-input'}
              onChange={this.updateBody}
              getText={this.getText}
            />
          </div>
        </div>
      );
    }
    return (
      <div className="note-editor" />
    );
  }
}

NoteEditor.propTypes = {
  updateNote: PropTypes.func.isRequired,
  notebooks: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentNote: PropTypes.shape({
    author_id: PropTypes.number,
    body: PropTypes.string,
    id: PropTypes.number,
    notebook: PropTypes.object,
    tags: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
    updated_at: PropTypes.string,
  }),
};

NoteEditor.defaultProps = {
  currentNote: null,
};

export default NoteEditor;
