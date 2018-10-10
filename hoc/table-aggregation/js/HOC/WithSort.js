const WithSort = (callback, propName, similarProp) => (Component) => {
  const SortComponent = (props) => {
    const {list} = props;
    const sortedList = callback(list, propName, similarProp);
    return <Component {...props} list={sortedList}/>;
  };

  return SortComponent;
};