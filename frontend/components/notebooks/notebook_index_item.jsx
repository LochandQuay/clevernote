import React from 'react';

class NotebookIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.selectNotebook = this.selectNotebook.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (!this.props.currentNotebook && newProps.currentNotebook) {
      this.props.fetchNotebook(newProps.currentNotebook.id);
    }
  }

  selectNotebook() {
    if ((this.props.currentNotebook &&
      this.props.notebook.id !== this.props.currentNotebook.id) ||
      (!this.props.currentNotebook)) {
        this.props.setCurrentNotebook(this.props.notebook);
      }
  }

  render() {
    return (
      <div className="notebook-index-item" onClick={this.selectNotebook}>
        <h3>{this.props.notebook.title}</h3>
      </div>
    );
  }
}

export default NotebookIndexItem;
