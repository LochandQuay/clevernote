export const fetchTags = () => (
  $.ajax({
    method: "GET",
    url: "api/tags"
  })
);

export const fetchTag = id => (
  $.ajax({
    method: "GET",
    url: `api/tags/${id}`
  })
);

// can include note_id and tag name
export const createTag = tag => (
  $.ajax({
    method: "POST",
    url: "api/tags",
    data: { tag }
  })
);

// removes tag and taggings from all notes
export const deleteTag = id => (
  $.ajax({
    method: "DELETE",
    url: `api/tags/${id}`
  })
);

export const fetchNoteTags = id => (
  $.ajax({
    method: "GET",
    url: `api/notes/${id}/tags`
  })
);

export const deleteNoteTag = ({id, note_id}) => (
  $.ajax({
    method: "DELETE",
    url: `api/tagging/${id}`,
    data: {tag: {note_id}}
  })
);
