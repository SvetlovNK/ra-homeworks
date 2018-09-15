function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n) && typeof n === 'number';
}