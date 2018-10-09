const WithAgregate = (Component, callback) => (props) => {
  const {list} = props;
  const aggregatedList = callback(list);

  return <Component {...props} list={aggregatedList}/>
};