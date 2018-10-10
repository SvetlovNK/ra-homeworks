const sortObjectsListByNumber = (list, propName) => {
  return list.sort((a, b) => a[propName] - b[propName]);
};