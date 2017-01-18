import React from 'react';
import NotebookIndexItemContainer from './notebook_index_item_container';


class NotebookIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {notebooks: this.props.notebooks};

  }

  componentDidMount() {
    this.props.fetchNotebooks();
  }

  componentWillReceiveProps(newProps) {
    this.setState({notebooks: newProps.notebooks});
  }

  render() {
      const notebookListItems = this.state.notebooks.map((notebook, idx) => (
        <li key={`notebook-list-item-${idx}`}>
          <NotebookIndexItemContainer notebook={notebook} />
        </li>
      ));

      return (
        <div className="notebook-index">
          <div className="notebooks-header">
            <h2>Notebooks</h2>
            <h4>{this.state.notebooks.length} notebooks</h4>
          </div>

          <div className="notebook-index-items">
            <ul>
              { notebookListItems }
            </ul>
          </div>
        </div>
    );
  }
}

export default NotebookIndex;
