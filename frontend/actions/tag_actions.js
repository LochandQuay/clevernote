import * as TagApiUtil from '../util/tag_api_util';
import { receiveNote } from './note_actions';

export const RECEIVE_TAGS = "RECEIVE_TAGS";
export const SET_CURRENT_TAG = "SET_CURRENT_TAG";
export const RECEIVE_TAGGING = "RECEIVE_TAGGING";

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
