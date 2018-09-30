const ISODatePropType = (props, propName, componentName) => {
  const date = props[propName];
  const isValid = typeof date === "string" && /\d{4}-\d{2}-\d{2}/.test(date);

  if (!isValid)
    return new Error(`Invalid prop ${propName} supplied to ${componentName}. Expecting something like 'YYYY-MM-DD'. Validation failed.`);

  return null;
};
