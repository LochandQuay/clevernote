import * as TagApiUtil from '../util/tag_api_util';
import { receiveNote } from './note_actions';

export const RECEIVE_TAGS = "RECEIVE_TAGS";
export const SET_CURRENT_TAG = "SET_CURRENT_TAG";
export const RECEIVE_TAGGING = "RECEIVE_TAGGING";
// export const RECEIVE_TAG = "RECEIVE_TAG";
// export const REMOVE_TAG = "REMOVE_TAG";
// export const RECEIVE_NOTE_TAGS = "RECEIVE_NOTE_TAGS";
// export const RECEIVE_FILTERED_NOTES = "RECEIVE_FILTERED_NOTES";
// export const MAKE_TAG = "MAKE_TAG";

export const fetchTags = () => dispatch => (
  TagApiUtil.fetchTags()
    .then(payload => dispatch(receiveTags(payload)))
);

export const createTag = tagData => dispatch => (
  TagApiUtil.createTag(tagData)
    .then(payload => dispatch(receiveTagging(payload)))
);

export const deleteTagging = taggingData => dispatch => (
  TagApiUtil.deleteTagging(taggingData)
  .then(note => dispatch(receiveNote(note)))
);

export const receiveTags = payload => ({
  type: RECEIVE_TAGS,
  payload
});

export const receiveTagging = payload => ({
  type: RECEIVE_TAGGING,
  payload
});

export const setCurrentTag = tag => ({
  type: SET_CURRENT_TAG,
  tag
});

// export const fetchTag = id => dispatch => (
//   TagApiUtil.fetchTag(id)
//     .then(tag => dispatch(receiveTag(tag)))
// );

// #NOTE: Should maybe keep to allow users to delete all taggings/tag.
// export const deleteTag = id => dispatch => (
//   TagApiUtil.deleteTag(id)
//     .then(tag => dispatch(removeTag(tag)))
// );
// export const removeTag = tag => ({
//   type: REMOVE_TAG,
//   tag
// });


/// NEW
// export const removeTagging = tagging => ({
//   type: REMOVE_TAGGING,
//   tagging
// });

// export const makeTag = payload => ({
//   type: MAKE_TAG,
//   payload
// });
