export const selectNote = ({ notes }, id) => {
   const note = notes[id] || {};
   return note;
};
