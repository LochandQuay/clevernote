export const selectNote = ({ notes }, id) => {
   const note = notes[id] || {};
   return note;
};

export const sorted = notes => notes.allIds.map(idx => notes.byId[idx]);

export const sortTags = tags => {
  let array = Object.keys(tags.byId).map(id => tags.byId[id]);

  return array.sort((a, b) => {
    let aname = a.name.toLowerCase();
    let bname = b.name.toLowerCase();
    if (aname < bname) { return -1; }
    if (aname > bname) { return 1; }
    return 0;
  });
};

export const alphaSort = items => {
  let array = Object.keys(items.byId).map(id => items.byId[id]);

  return array.sort((a, b) => {
    let atitle = a.title.toLowerCase();
    let btitle = b.title.toLowerCase();
    if (atitle < btitle) { return -1; }
    if (atitle > btitle) { return 1; }
    return 0;
  });
};

export const filteredNotes = (notes, filterType, filter) => {
  switch(filterType) {
    case 'notebook':
      return notes.filter( note => note.notebook_id === filter );
    case 'tag':
      return notes.filter( note => note.tags.some( tag => tag.id === filter) );
    default:
      return notes;
  }
};

// new
export const allNoteTags = tags => Object.keys(tags).map(id => tags[id]);

export const allTags = tags => Object.keys(tags).map(id => tags[id]);
