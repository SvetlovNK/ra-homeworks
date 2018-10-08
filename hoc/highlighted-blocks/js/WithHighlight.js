const WithHighlight = (Component) => (props) => {
  const {views} = props;

  if (views < 100) {
    return (
      <New>
        <Component {...props}/>
      </New>
    )
  }

  if (views > 1000) {
    return (
      <Popular>
        <Component {...props}/>
      </Popular>
    )
  }

  return <Component {...props}/>;
};