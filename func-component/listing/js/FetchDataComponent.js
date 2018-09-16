const FetchDataComponent = (WrappedComponent, url = '') => {
  return class FetchDataComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        loading: false,
        loaded: false,
      };
    }

    componentDidMount() {
      this.setState({loading: true});

      fetch(url)
        .then(response => response.json())
        .then(data => {
          this.setState({
            data,
            loading: false,
            loaded: true
          })
        })
        .catch(error => {
          console.error(`FetchDataComponent could not load date \n ${error}`);

          this.setState({
            loading: false,
            loaded: false
          })
        })
    }

    render() {
      const {loading, loaded} = this.state;

      return (
        <div className="fetch-data-component">
          {loading ?
            <div className="fetch-data-component__preloader">loading...</div> :
            loaded ?
              <WrappedComponent />:
              <div className="fetch-data-component__preloader fetch-data-component__preloader--error">Error, try refreshing the page.</div>
          }
        </div>
      )
    }
  }
};
