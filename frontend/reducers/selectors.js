export const selectNote = ({ notes }, id) => {
  const note = notes[id] || {};
  return note;
};

export const sorted = notes => notes.allIds.map(idx => notes.byId[idx]);

export const sortTags = (tags) => {
  const array = Object.keys(tags.byId).map(id => tags.byId[id]);

  return array.sort((a, b) => {
    const aname = a.name.toLowerCase();
    const bname = b.name.toLowerCase();
    if (aname < bname) { return -1; }
    if (aname > bname) { return 1; }
    return 0;
  });
};

export const alphaSort = (items) => {
  const array = Object.keys(items.byId).map(id => items.byId[id]);

  return array.sort((a, b) => {
    const atitle = a.title.toLowerCase();
    const btitle = b.title.toLowerCase();
    if (atitle < btitle) { return -1; }
    if (atitle > btitle) { return 1; }
    return 0;
  });
};

export const filteredNotes = (notes, filterType, filter) => {
  switch (filterType) {
    case 'notebook':
      return notes.filter(note => note.notebook.id === filter);
    case 'tag':
      return notes.filter(note => note.tags.some(tag => tag.id === filter));
    default:
      return notes;
  }
};

export const allNoteTags = tags => Object.keys(tags).map(id => tags[id]);

export const allTags = tags => Object.keys(tags).map(id => tags[id]);
