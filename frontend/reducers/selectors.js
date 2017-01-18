export const selectNote = ({ notes }, id) => {
   const note = notes[id] || {};
   return note;
};

export const sortedNotes = notes => {
  let notesArray = Object.keys(notes).map(id => notes[id]);
  return notesArray.sort((x, y) => {
    let xDate = new Date(x.updated_at);
    let yDate = new Date(y.updated_at);
    return yDate - xDate;
  });
};
