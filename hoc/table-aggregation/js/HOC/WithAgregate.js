const WithAgregate = (callback) => (Component) => {
  return class AgregateComponent extends React.Component {
    render() {
      return <Component {...this.props} list={callback(this.props.list)}/>
    }
  }
};