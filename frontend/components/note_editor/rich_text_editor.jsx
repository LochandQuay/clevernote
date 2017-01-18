import React from 'react';
import {
  Editor,
  EditorState,
  RichUtils,
  CompositeDecorator,
  ContentBlock,
  ContentState,
  Entity,
  convertFromHTML,
  convertToRaw,
  convertFromRaw
} from 'draft-js';
import PrismDecorator from 'draft-js-prism';

import { MegadraftEditor, editorStateFromRaw } from 'megadraft';
// import '../../../node_modules/megadraft/dist/css/megadraft.css';

const styles = {
  code: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
  codeBlock: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 20,
  }
};

// import type {RawDraftContentBlock} from 'RawDraftContentBlock';
// import type {RawDraftEntity} from 'RawDraftEntity';

// export type RawDraftContentState = {
//   blocks: Array<RawDraftContentBlock>,
//   entityMap: {[key: string]: RawDraftEntity},
// };


class RichTextEditor extends React.Component {
  constructor(props) {
    super(props);
    debugger;

    // const defaultValue = this.props.defaultValue;
    // const rawData = mdToDraftjs(defaultValue);
    // const contentState = convertFromRaw(rawData);
    // const newEditorState = EditorState.createWithContent(contentState);
    const decorator = new PrismDecorator();
    let editorState;
    if (this.props.note) {
      const rawData = convertToRaw(this.props.note.body);
      editorState = editorStateFromRaw(rawData);
    }
    else {
      editorState = EditorState.createEmpty(decorator);
    }
    let title;
    if (this.props.note) {
      title = this.props.note.title;
    }
    else {
      title = "";
    }

    const raw = convertToRaw(editorState.getCurrentContent());
    this.state = {
      title: title,
      editorState: editorState,
      raw
    };

    // this.focus = () => this.refs.editor.focus();
    this.onChange = (newEditorState) => this.setState({
      editorState: newEditorState,
      raw: convertToRaw(newEditorState.getCurrentContent())
    });

    this.handleKeyCommand = (command) => this._handleKeyCommand(command);
    this.handleUpdate = this.handleUpdate.bind(this);
    // this.onTab = (e) => this._onTab(e);
    // this.toggleBlockType = (type) => this._toggleBlockType(type);
    // this.toggleInlineStyle = (style) => this._toggleInlineStyle(style);
  }

  componentWillReceiveProps(newProps, newState) {
    debugger;
    if (newProps.note === null) {
      this.setState({
        title: "",
        editorState: EditorState.createEmpty()
      });
      return;
    }
    else if (newProps.note) {
      if (!this.props.note || this.props.note.id !== newProps.note.id) {
        const raw = convertToRaw(newProps.note.body);
        this.setState({
          title: newProps.note.title,
          editorState:  editorStateFromRaw(raw)
        });
      }
    }
  }

  handleUpdate () {
    return (editorState) => {
      this.setState({
        editorState,
        raw: convertToRaw(editorState.getCurrentContent()),
        paste: false
      });
    };
  }

  handleLoad () {
    return (raw) => {
      this.setState({
        editorState: EditorState.createWithContent(convertFromRaw(raw)),
        raw,
        paste: false
      });
    };
  }

  togglePaste () {
    return () => {
      this.setState({
        paste: !this.state.paste
      });
    };
  }
  /////////////////////////////////////////////////////////////////////////

  _handleKeyCommand(command) {
    const {editorState} = this.state;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  _onTab(e) {
    const maxDepth = 4;
    this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
  }

  _toggleBlockType(blockType) {
    this.onChange(
      RichUtils.toggleBlockType(
        this.state.editorState,
        blockType
      )
    );
  }

  _toggleInlineStyle(inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState,
        inlineStyle
      )
    );
  }

  handleSubmit(e) {
    const editorState = this.state.editorState;
    const contentState = editorState.getCurrentContent();
    const rawContentState =
      window.rawContentState = convertToRaw(contentState);

  }

  update(field) {
    return e => (
      this.setState({[field]: e.target.value})
    );
  }

  render() {
    const editorState = this.state.editorState;

    // If the user changes block type before entering any text, we can
    // either style the placeholder or hide it. Let's just hide it now.
    let className = 'RichEditor-editor';
    var contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        className += ' RichEditor-hidePlaceholder';
      }
    }

    if (this.props.note === null) {
      return (
        <div className="note-editor"></div>
      );
    }

    return (
      <div className="RichEditor-root">
        <BlockStyleControls
          editorState={editorState}
          onToggle={this.toggleBlockType}
        />
        <InlineStyleControls
          editorState={editorState}
          onToggle={this.toggleInlineStyle}
        />

      <input
        type="text"
        className="text-editor-title-input"
        placeholder="Title your note"
        onChange={this.update('title')}
        value={this.state.title} />

        <div className={className} onClick={this.focus}>


          <Editor
            editorState={editorState}
            onChange={this.onChange}
            blockStyleFn={getBlockStyle}
            customStyleMap={styleMap}
            handleKeyCommand={this.handleKeyCommand}
            onTab={this.onTab}
            placeholder="Write your note here..."
            ref="editor"
            spellCheck={true}
          />
        </div>
        <input
          type="submit"
          value="Save Fancy Note"
          className="button save-note-button"
          onClick={this.handleSubmit.bind(this)} />
      </div>
    );
  }
}

// Custom overrides for "code" style.
const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
};

function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote': return 'RichEditor-blockquote';
    default: return null;
  }
}

class StyleButton extends React.Component {
  constructor() {
    super();
    this.onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    let className = 'RichEditor-styleButton';
    if (this.props.active) {
      className += ' RichEditor-activeButton';
    }

    return (
      <span className={className} onMouseDown={this.onToggle}>
        {this.props.label}
      </span>
    );
  }
}

const BLOCK_TYPES = [
  {label: 'H1', style: 'header-one'},
  {label: 'H2', style: 'header-two'},
  {label: 'H3', style: 'header-three'},
  {label: 'H4', style: 'header-four'},
  {label: 'H5', style: 'header-five'},
  {label: 'H6', style: 'header-six'},
  {label: 'Blockquote', style: 'blockquote'},
  {label: 'UL', style: 'unordered-list-item'},
  {label: 'OL', style: 'ordered-list-item'},
  {label: 'Code Block', style: 'code-block'},
];

const BlockStyleControls = (props) => {
  const {editorState} = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <div className="RichEditor-controls">
      {BLOCK_TYPES.map((type) =>
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
    </div>
  );
};

var INLINE_STYLES = [
  {label: 'Bold', style: 'BOLD'},
  {label: 'Italic', style: 'ITALIC'},
  {label: 'Underline', style: 'UNDERLINE'},
  {label: 'Monospace', style: 'CODE'},
];

const InlineStyleControls = (props) => {
  var currentStyle = props.editorState.getCurrentInlineStyle();
  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map(type =>
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
    </div>
  );
};

export default RichTextEditor;
