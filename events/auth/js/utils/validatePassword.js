const validatePassword = (string) => {
  const TYPES = {
    password: /[\\W]/gi,
    email: /[^\w/@.-]/gi
  };

  const pattern = /[\W]/gi;

  return string.replace(pattern, '');
};