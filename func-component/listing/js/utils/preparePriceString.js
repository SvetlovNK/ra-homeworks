const preparePriceString = (price, currency_code) => {
  const CODE_TYPES = {
    usd: 'USD',
    eur: 'EUR'
  };

  switch (currency_code) {
    case CODE_TYPES.usd: return `$${price}`;
    case CODE_TYPES.eur: return `€${price}`;
    default: return `${price} ${currency_code}`
  }
};