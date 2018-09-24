class AccordianItem extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    isOpened: false
  };

  handleClick = () => {
    this.setState({
      isOpened: !this.state.isOpened
    });
  };

  render() {
    const {isOpened} = this.state;
    const articleHeader = this.props.children[0];
    const articleBody = this.props.children.slice(1);

    return (
      <section className={`section ${isOpened ? 'open' : ''}`}>
        <div className="section__header" onClick={this.handleClick}>
          {articleHeader}
        </div>

        <div className="articlewrap">
          {articleBody}
        </div>
      </section>
    );
  }
}