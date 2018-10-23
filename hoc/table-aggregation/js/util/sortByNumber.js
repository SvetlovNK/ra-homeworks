const sortByNumber = (propName = '') => (list) => {
  return list.sort((a, b) => a[propName] + b[propName]);
};