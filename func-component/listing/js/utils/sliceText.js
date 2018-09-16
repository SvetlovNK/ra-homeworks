const prepareText = (text, textLimit) => {
  const string = text.slice(0, textLimit);

  return `${string}...`
};

const sliceText = (text = '', textLimit) => {
  return text.length > textLimit ? prepareText(text, textLimit) : text;
};