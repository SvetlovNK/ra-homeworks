const agregateByDate = (dateUnit = 'month', localeSettings = {month: 'short'}) => (list = []) => {
  const agregatedData = {};
  if (!list.length) return [];

  list.forEach(({date, amount}) => {
    const itemDate = new Date(date);
    const dateName = itemDate.toLocaleString('en-us', localeSettings).toUpperCase();

    agregatedData.hasOwnProperty(dateName) ? agregatedData[dateName] += amount : agregatedData[dateName] = amount;
  });


  return Object.keys(agregatedData).map(key => {
    return {[dateUnit]: key, amount: agregatedData[key]};
  });
};