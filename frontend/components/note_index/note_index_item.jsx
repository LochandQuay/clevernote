import React from 'react';
import { Link } from 'react-router';

const getTimeStamp = (lastUpdatedTime) => {
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

const NoteIndexItem = ({note}) => {
  return (
  <div className="note-index-item">
    <h3>{note.title}</h3>
    <h6>{getTimeStamp(note.updated_at)}</h6>
    <p>{note.body}</p>
  </div>
);};

export default NoteIndexItem;
