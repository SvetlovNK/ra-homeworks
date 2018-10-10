const WithShortMonth = () => (Component) => {
  const ShortMonthComponent = props => {
    const {list} = props;
    const prependedList = list.map(({month, ...spread}) => {
      const shortMonth = month.substr(0, 3).toUpperCase();
      return {
        month: shortMonth,
        ...spread
      }
    });

    return <Component {...props} list={prependedList}/>
  };

  return ShortMonthComponent;
};