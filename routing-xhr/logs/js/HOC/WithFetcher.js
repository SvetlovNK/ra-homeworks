const WithFetcher = ({url, collName}) => (Component) => {
  return class WithFetcher extends React.Component {
    state = {
      [collName]: [],
    };

    componentDidMount() {
      fetch(url)
        .then(response => response.json())
        .then(result => this.setState({[collName]: result}));
    }

    render() {
      return (
        <Component {...this.props} {...this.state}/>
      )
    }
  }
};