const WithAgregate = (callback) => (Component) => {
  const AgregateComponent = props => {
    const {list} = props;
    const aggregatedList = callback(list);

    return <Component {...props} list={aggregatedList}/>
  };

  return AgregateComponent;
};