const ISODatePropType = (props, propName, componentName) => {
  const date = props[propName];
  const propDate = new Date(date);
  const currentDate = new Date();
  const isValid = typeof date === "string" && /\d{4}-\d{2}-\d{2}/.test(date) && propDate <= currentDate;

  if (!isValid) {
    return new Error(`Invalid prop ${propName} supplied to ${componentName}. Expecting something like 'YYYY-MM-DD' or date "${date}" more then current date "${currentDate.toISOString().slice(0, 10)}". Validation failed.`);
  }

  return null;
};
