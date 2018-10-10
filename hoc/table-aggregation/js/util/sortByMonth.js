const sortByMonth = (list, mode = 'long') => {
  const monthList = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

  if (!list.length) return [];

  const getIndex = (item, month) => {
    const itemMonth = item.month.toLowerCase();
    return mode === 'long' ? itemMonth === month : itemMonth === month.substr(0, 3);
  };

  return list.sort((a, b) => {
    const aIndex = monthList.findIndex(month => getIndex(a, month));
    const bIndex = monthList.findIndex(month => getIndex(b, month));
    return aIndex - bIndex;
  })
};