const sortByDate = (list) => {
  if (!list.length) return;

  return list.sort((a, b) => {
    const aDate = new Date(a.date);
    const bDate = new Date(b.date);
    return bDate - aDate;
  })
};