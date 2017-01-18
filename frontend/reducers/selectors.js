export const selectNote = ({ notes }, id) => {
   const note = notes[id] || {};
   return note;
};

export const sorted = items => {
  let array = Object.keys(items).map(id => items[id]);
  return array.sort((x, y) => {
    let xDate = new Date(x.updated_at);
    let yDate = new Date(y.updated_at);
    return yDate - xDate;
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
