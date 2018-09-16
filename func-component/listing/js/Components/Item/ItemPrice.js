const ItemPrice = ({price, currency_code}) => {
  const priceString = preparePriceString(price, currency_code);

  return <p className="item-price">{priceString}</p>
};