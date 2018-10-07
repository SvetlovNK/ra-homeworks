class Cart extends React.PureComponent {

  shouldComponentUpdate(nextProps, nextState) {
    const {isOpen} = nextProps;
    const isCurrentlyOpened = this.props.isOpen;

    if (isCurrentlyOpened !== isOpen || isOpen) {
      return true;
    }
  }

  render() {
    return (
      <CartView {...this.props} />
    );
  }

}
