const getQuantityMod = (count) => {
  const TYPES = {
    levelLow: 10,
    levelMedium: 20
  };

  if(count <= TYPES.levelLow) {
    return 'level-low';
  } else if (count <= TYPES.levelMedium) {
    return 'level-medium'
  }

  return 'level-high'
};

const ItemQuantity = ({quantity}) => {
  const quantityLevel = getQuantityMod(quantity);
  const className = `item-quantity ${quantityLevel}`;

  return <p className={className}>{quantity} left</p>
};