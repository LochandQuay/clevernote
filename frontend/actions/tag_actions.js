import * as TagApiUtil from '../util/tag_api_util';
import { receiveNotes } from './note_actions';

export const RECEIVE_TAGS = "RECEIVE_TAGS";
export const RECEIVE_TAG = "RECEIVE_TAG";
export const REMOVE_TAG = "REMOVE_TAG";
export const RECEIVE_NOTE_TAGS = "RECEIVE_NOTE_TAGS";

export const fetchTags = () => dispatch => (
  TagApiUtil.fetchTags()
    .then(tags => dispatch(receiveTags(tags)))
);

export const createTag = tag => dispatch => (
  TagApiUtil.createTag(tag)
    .then(newOrExistingTag => dispatch(receiveTag(newOrExistingTag)))
);

export const fetchTag = id => dispatch => (
  TagApiUtil.fetchTag(id)
    .then(taggedNotes => dispatch(receiveNotes(taggedNotes)))
);

export const deleteTag = id => dispatch => (
  TagApiUtil.deleteTag(id)
    .then(tag => dispatch(receiveTag(tag)))
);

export const fetchNoteTags = id => dispatch => (
  TagApiUtil.fetchNoteTags(id)
    .then(tags => dispatch(receiveNoteTags(tags)))
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
