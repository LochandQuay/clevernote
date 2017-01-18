import { receiveNotes, receiveNote } from '../actions/note_actions';

export const fetchNotes = () => (
  $.ajax({
    method: "GET",
    url: "api/notes"
  })
);

export const fetchNote = id => (
  $.ajax({
    method: "GET",
    url: `api/notes/${id}`
  })
);

export const createNote = note => (
  $.ajax({
    method: "POST",
    url: "api/notes",
    data: { note }
  })
);

export const updateNote = note => (
  $.ajax({
    method: "PATCH",
    url: `api/notes/${note.id}`,
    data: { note }
  })
);

export const deleteNote = id => (
  $.ajax({
    method: "DELETE",
    url: `api/notes/${id}`
  })
);

// #NB: OLD VERSION (USING USER)
// export const fetchNotes = userId => (
//   $.ajax({
//     method: "GET",
//     url: `/api/users/${userId}/notes`
//   })
// );
//
// export const fetchNote = (userId, noteId) => (
//   $.ajax({
//     method: "GET",
//     url: `/api/users/${userId}/notes/${noteId}`
//   })
// );
//
// export const createNote = note => (
//   $.ajax({
//     method: "POST",
//     url: `/api/users/${note.author_id}/notes/`,
//     data: { note }
//   })
// );
//
// export const updateNote = note => (
//   $.ajax({
//     method: "PATCH",
//     url: `/api/users/${note.author_id}/notes/${note.id}`,
//     data: { note }
//   })
// );
//
// export const deleteNote = (userId, noteId) => (
//   $.ajax({
//     method: "DELETE",
//     url: `/api/users/${userId}/notes/${noteId}`
//   })
// );
