const urlVKPropType = (props, propName, componentName) => {
  const url = props[propName];
  const vkUrlPattern = /https:\/\/vk.com\/(id[0-9]+|[A-Za-z0-9_-]+)/gi;
  const isValid = typeof url === "string" && vkUrlPattern.test(url);

  if (!isValid) {
    return new Error(`Invalid prop ${propName} supplied to ${componentName}. Expecting something like "https://vk.com/id1" or "https://vk.com/username". Validation failed.`);
  }

  return null;
};
