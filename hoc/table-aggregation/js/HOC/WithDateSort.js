const WithDateSort = (Component, callback) => (props) => {
  const {list} = props;
  const sortedList = callback(list);

  return <Component {...props} list={sortedList}/>
};