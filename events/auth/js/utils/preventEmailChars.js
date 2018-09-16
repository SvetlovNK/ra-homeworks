const preventEmailChars = (string) => {
  const pattern = /[^\w\@_.-]/g;

  return string.replace(pattern, '');
};