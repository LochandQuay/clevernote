export const selectNote = ({ notes }, id) => {
   const note = notes[id] || {};
   return note;
};

// SORTS NOTES BY MOST RECENTLY UPDATED
export const sorted = items => {
  let array = Object.keys(items).map(id => items[id]);
  return array.sort((x, y) => {
    let xDate = new Date(x.updated_at);
    let yDate = new Date(y.updated_at);
    return yDate - xDate;
  });
};

export const sortTags = tags => {
  let array = Object.keys(tags).map(id => tags[id]);

  return array.sort((a, b) => {
    let aname = a.name.toLowerCase();
    let bname = b.name.toLowerCase();
    if (aname < bname) { return -1; }
    if (aname > bname) { return 1; }
    return 0;
  });
};

export const alphaSort = items => {
  let array = Object.keys(items).map(id => items[id]);

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
