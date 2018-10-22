const sortByMonth = (list) => {
  if (!list.length) return [];

  return list.sort((a, b) => {
    return new Date(a.date).getMonth() - new Date(b.date).getMonth();
  });
};