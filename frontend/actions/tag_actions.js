import * as TagApiUtil from '../util/tag_api_util';

export const RECEIVE_TAGS = "RECEIVE_TAGS";
export const RECEIVE_TAG = "RECEIVE_TAG";
export const REMOVE_TAG = "REMOVE_TAG";
export const RECEIVE_NOTE_TAGS = "RECEIVE_NOTE_TAGS";
export const SET_CURRENT_TAG = "SET_CURRENT_TAG";
export const RECEIVE_FILTERED_NOTES = "RECEIVE_FILTERED_NOTES";
export const REMOVE_TAGGING = "REMOVE_TAGGING";

export const MAKE_TAG = "MAKE_TAG";
export const REMOVE_ZERO = "REMOVE_ZERO";

export const fetchTags = () => dispatch => (
  TagApiUtil.fetchTags()
    .then(tags => dispatch(receiveTags(tags)))
);

// export const createTag = tag => dispatch => (
//   TagApiUtil.createTag(tag)
//     .then(newOrExistingTag => dispatch(receiveTag(newOrExistingTag)))
// );

export const createTag = tagData => dispatch => (
  TagApiUtil.createTag(tagData)
    .then(tag => dispatch(makeTag(tag)))
);

export const fetchTag = id => dispatch => (
  TagApiUtil.fetchTag(id)
    .then(taggedNotes => dispatch(receiveFilteredNotes(taggedNotes)))
);

// export const deleteTag = id => dispatch => (
//   TagApiUtil.deleteTag(id)
//     .then(tag => dispatch(receiveTag(tag)))
// );

export const deleteTag = id => dispatch => (
  TagApiUtil.deleteTag(id)
    .then(tag => dispatch(removeTag(tag)))
);

export const fetchNoteTags = id => dispatch => (
  TagApiUtil.fetchNoteTags(id)
    .then(tags => dispatch(receiveNoteTags(tags)))
);

// export const deleteNoteTag = data => dispatch => (
//   TagApiUtil.deleteNoteTag(data)
//     .then(tagging => dispatch(receiveNoteTags(tagging.note_id)))
// );

export const deleteTagging = taggingData => dispatch => (
  TagApiUtil.deleteTagging(taggingData)
    .then(tagging => dispatch(removeTagging(tagging)))
);

export const receiveTags = tags => ({
  type: RECEIVE_TAGS,
  tags
});

export const receiveTag = tag => ({
  type: RECEIVE_TAG,
  tag
});

export const removeTag = tag => ({
  type: REMOVE_TAG,
  tag
});

export const receiveNoteTags = tags => ({
  type: RECEIVE_NOTE_TAGS,
  tags
});

export const setCurrentTag = tag => ({
  type: SET_CURRENT_TAG,
  tag
});

export const receiveFilteredNotes = notes => ({
  type: RECEIVE_FILTERED_NOTES,
  notes
});

/// NEW
export const removeTagging = tagging => ({
  type: REMOVE_TAGGING,
  tagging
});

export const removeZeroIdTag = () => ({
  type: REMOVE_ZERO
});

export const makeTag = tag => ({
  type: MAKE_TAG,
  tag
});