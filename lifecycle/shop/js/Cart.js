class Cart extends React.PureComponent {

  shouldComponentUpdate(nextProps, nextState) {
    const {isOpen} = nextProps;
    const isCurrentlyOpened = this.props.isOpen;

    return isCurrentlyOpened !== isOpen || isOpen;
  }

  render() {
    console.log('render');
    return (
      <CartView {...this.props} />
    );
  }

}
