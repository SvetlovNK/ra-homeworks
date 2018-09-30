const createChainableTypeChecker = (validate) => {
  const checkType = (isRequired, props, propName, componentName) => {
    if (props[propName] === undefined || props[propName] === null) {
      if (isRequired) {
        return new Error(`Required ${propName} was not specified in ${componentName}.`)
      }
      return null;
    } else {
      return validate(props, propName, componentName);
    }
  };

  const chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);
  return chainedCheckType;
};