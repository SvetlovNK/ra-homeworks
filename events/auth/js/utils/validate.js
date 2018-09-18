const validate = (string, typeName) => {
  const VALIDATE_TYPES = {
    password: /[\W]/gi,
    email: /[^\w/@.-]/gi
  };

  if (!typeName) return string;

  const pattern = VALIDATE_TYPES[typeName];

  return string.replace(pattern, '');
};