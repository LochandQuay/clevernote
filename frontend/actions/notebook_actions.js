import * as NotebookApiUtil from '../util/notebook_api_util';

export const RECEIVE_NOTEBOOKS = "RECEIVE_NOTEBOOKS";
export const RECEIVE_NOTEBOOK = "RECEIVE_NOTEBOOK";
export const REMOVE_NOTEBOOK = "REMOVE_NOTEBOOK";
export const SET_CURRENT_NOTEBOOK = "SET_CURRENT_NOTEBOOK";

export const MAKE_NOTEBOOK = "MAKE_NOTEBOOK";
export const EDIT_NOTEBOOK = "EDIT_NOTEBOOK";

export const fetchNotebooks = () => dispatch => (
  NotebookApiUtil.fetchNotebooks()
    .then(notebooks => dispatch(receiveNotebooks(notebooks)))
);

export const fetchNotebook = id => dispatch => (
  NotebookApiUtil.fetchNotebook(id)
    .then(notebook => dispatch(receiveNotebook(notebook)))
);

// export const createNotebook = notebook => dispatch => (
//   NotebookApiUtil.createNotebook(notebook)
//     .then(newNotebook => dispatch(receiveNotebook(newNotebook)))
// );

export const createNotebook = notebook => dispatch => (
  NotebookApiUtil.createNotebook(notebook)
    .then(newNotebook => dispatch(makeNotebook(newNotebook)))
);

// export const updateNotebook = notebook => dispatch => (
//   NotebookApiUtil.updateNotebook(notebook)
//     .then(updated => dispatch(receiveNotebook(updated)))
// );

export const updateNotebook = notebook => dispatch => (
  NotebookApiUtil.updateNotebook(notebook)
    .then(updated => dispatch(editNotebook(updated)))
);

export const deleteNotebook = id => dispatch => (
  NotebookApiUtil.deleteNotebook(id)
    .then(notebook => dispatch(removeNotebook(notebook)))
);

export const receiveNotebooks = notebooks => ({
  type: RECEIVE_NOTEBOOKS,
  notebooks
});

export const receiveNotebook = notebook => ({
  type: RECEIVE_NOTEBOOK,
  notebook
});

export const removeNotebook = notebook => ({
  type: REMOVE_NOTEBOOK,
  notebook
});

export const setCurrentNotebook = notebook => ({
  type: SET_CURRENT_NOTEBOOK,
  notebook
});

// new
export const makeNotebook = notebook => ({
  type: MAKE_NOTEBOOK,
  notebook
});

export const editNotebook = notebook => ({
  type: EDIT_NOTEBOOK,
  notebook
});
