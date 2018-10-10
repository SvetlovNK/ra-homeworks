const aggregateByDate = (dateUnit = 'month', localeSettings = {month: 'short'}) => (list = []) => {
  const aggregatedData = {};

  if (!list.length) return [];

  list.forEach(({date, amount}) => {
    const itemDate = new Date(date);
    const dateName = itemDate.toLocaleString('en-us', localeSettings).toUpperCase();

    aggregatedData.hasOwnProperty(dateName) ? aggregatedData[dateName] += amount : aggregatedData[dateName] = amount;
  });

  return Object.keys(aggregatedData).map(key => {
    return {[dateUnit]: key, amount: aggregatedData[key]};
  });
};