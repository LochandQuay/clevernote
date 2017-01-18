import React from 'react';
// import { Link } from 'react-router';
// import Modal from 'react-modal';

const getTimeStamp = (lastUpdatedTime) => {
  if (lastUpdatedTime === null) {
    return "Moments ago";
  }
  
  const currentTime = new Date();
  const updated = new Date(lastUpdatedTime);

  const yearDiff = currentTime.getFullYear() - updated.getFullYear();
  if ( yearDiff > 0) {
    return (yearDiff === 1) ? "1 year ago" : `${yearDiff} years ago`;
  }

  const monthDiff = currentTime.getMonth() - updated.getMonth();
  if ( monthDiff > 0) {
    return (monthDiff === 1) ? "1 month ago" : `${monthDiff} months ago`;
  }

  const dateDiff = currentTime.getDate() - updated.getDate();
  if ( dateDiff > 0) {
    return (dateDiff === 1) ? "1 day ago" : `${dateDiff} days ago`;
  }

  const hourDiff = currentTime.getHours() - updated.getHours();
  if ( hourDiff > 0) {
    return (hourDiff === 1) ? "1 hour ago" : `${hourDiff} hours ago`;
  }

  const minuteDiff = currentTime.getMinutes() - updated.getMinutes();
  if ( minuteDiff > 0) {
    return (minuteDiff === 1) ? "1 minute ago" : `${minuteDiff} minutes ago`;
  }

  const secondDiff = currentTime.getSeconds() - updated.getSeconds();
  if ( secondDiff < 60) {
    return "Moments ago";
  }
};

const getBodyPreview = (body) => {

};

class NoteIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.selectNote = this.selectNote.bind(this);
  }

  selectNote() {
    console.log("Current Note: ", this.props.currentNote);
    console.log("Selected Note: ", this.props.note);
    if ((this.props.currentNote &&
      this.props.note.id !== this.props.currentNote.id) ||
      (!this.props.currrentNote)) {
        this.props.setCurrentNote(this.props.note);
    }
  }

  render() {

    return (
      <div className="note-index-item" onClick={this.selectNote}>
        <h3>{this.props.note.title}</h3>
        <h5>{getTimeStamp(this.props.note.updated_at)}</h5>
        <p>{this.props.note.body}</p>
      </div>
    );
  }
}

export default NoteIndexItem;
