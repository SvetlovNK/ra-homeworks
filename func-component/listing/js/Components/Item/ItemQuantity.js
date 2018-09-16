const getQuantityMod = (count) => {
  const QUANTITY_TYPES = {
    levelLow: 10,
    levelMedium: 20
  };

  if(count <= QUANTITY_TYPES.levelLow) {
    return 'level-low';
  } else if (count <= QUANTITY_TYPES.levelMedium) {
    return 'level-medium'
  }

  return 'level-high'
};

const ItemQuantity = ({quantity}) => {
  const quantityLevel = getQuantityMod(quantity);
  const className = `item-quantity ${quantityLevel}`;

  return <p className={className}>{quantity} left</p>
};