const validateEmail = (string) => {
  const pattern = /[^\w/@.-]/gi;

  return string.replace(pattern, '');
};