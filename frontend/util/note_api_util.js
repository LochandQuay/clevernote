import { receiveCurrentUser, receiveErrors } from '../actions/session_actions';

export const fetchNotes = userId => (
  $.ajax({
    method: "GET",
    url: `/api/users/${userId}/notes`
  })
);

export const fetchNote = (userId, noteId) => (
  $.ajax({
    method: "GET",
    url: `/api/users/${userId}/notes/${noteId}`
  })
);

export const createNote = note => (
  $.ajax({
    method: "POST",
    url: `/api/users/${note.author_id}/notes/`,
    data: { note }
  })
);

export const updateNote = note => (
  $.ajax({
    method: "PATCH",
    url: `/api/users/${note.author_id}/notes/${note.id}`,
    data: { note }
  })
);

export const deleteNote = (userId, noteId) => (
  $.ajax({
    method: "DELETE",
    url: `/api/users/${userId}/notes/${noteId}`
  })
);
