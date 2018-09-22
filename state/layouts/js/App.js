'use strict';

const VIEW_LIST = "view_list";
const VIEW_MODULE = "view_module";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cardView: true
    }
  }

  switchCardView = () => {
    this.setState({
      cardView: !this.state.cardView
    })
  };

  render() {
    const {cardView} = this.state;

    return (
      <div>
        <div className="toolbar">
          <IconSwitch
            icon={cardView ? VIEW_LIST : VIEW_MODULE}
            onSwitch={this.switchCardView} />
        </div>
        {this.renderLayout(cardView)}
      </div>
    );
  }

  renderLayout(cardView) {
    if (cardView) {
      return (
        <CardsView
          layout={this.props.layout}
          cards={this.getShopItems(this.props.products, cardView)} />
      );
    }
    return (<ListView items={this.getShopItems(this.props.products, cardView)} />);
  }

  getShopItems(products, cardView) {
    return products.map(product => {
      let cardProps = {
        title: product.name,
        caption: product.color,
        img: product.img,
        price: `$${product.price}`
      };
      if (cardView) {
        return (
          <ShopCard {...cardProps}/>
        );
      }
      return (<ShopItem {...cardProps}/>)
    });
  }
}
