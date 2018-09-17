const validatePassword = (string) => {
  const pattern = /[\W]/gi;

  return string.replace(pattern, '');
};