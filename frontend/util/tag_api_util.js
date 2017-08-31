export const fetchTags = () => (
  $.ajax({
    method: "GET",
    url: "api/tags"
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

export const deleteTagging = ({id, note_id}) => (
  $.ajax({
    method: "DELETE",
    url: `api/tagging/${id}`,
    data: {tag: {id: id, note_id: note_id}}
  })
);

// removes tag and taggings from all notes
// #NOTE: Currently not in use
// export const deleteTag = id => (
//   $.ajax({
//     method: "DELETE",
//     url: `api/tags/${id}`
//   })
// );

// export const fetchTag = id => (
//   $.ajax({
//     method: "GET",
//     url: `api/tags/${id}`
//   })
// );
