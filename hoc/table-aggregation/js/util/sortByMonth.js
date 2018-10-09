const sortByMonth = (list, mode = 'long') => {
  const monthList = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

  return list.sort((a, b) => {
    const firstMonth = mode = 'short' ? a.month.toLowerCase() :
      console.log(monthList.indexOf(a.month))
  })
};