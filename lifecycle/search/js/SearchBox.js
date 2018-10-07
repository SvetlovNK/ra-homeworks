class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {fixed: false};
    this.searchRef = undefined;
    this.offsetTop = undefined;
  }

  handleScroll = (event) => {
    const document = event.target.documentElement;
    const scrollTop = document.scrollTop;
    const searchOffsetTop = this.searchRef.offsetTop;

    this.isFixed(scrollTop, searchOffsetTop);
  };

  isFixed = (scrolledTop, searchOffset) => {
    const {fixed} = this.state;

    if (fixed && scrolledTop - searchOffset <= this.offsetTop) {
      this.setPosition(false);
      return;
    }

    if (searchOffset - scrolledTop < 0) {
      this.setPosition(true);
    }
  };

  setPosition = (isFixed = true) => {
    this.setState({fixed: isFixed});
  };

  componentDidMount() {
    this.offsetTop = this.searchRef.offsetTop;

    window.addEventListener('scroll', this.handleScroll);
  }

  render() {
    return <SearchBoxView getRef={el => this.searchRef = el} fixed={this.state.fixed}/>
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
