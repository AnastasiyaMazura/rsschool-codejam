module.exports = function make(...args) {
  const arrayOfValue = [];
  args.reduce((previousValue, currentItem) => {
    arrayOfValue.push(currentItem);
    return 0;
  }, 0);

  function fn(...args) {
    args.reduce((previousValue, currentItem) => {
      arrayOfValue.push(currentItem);
      return 0;
    }, 0);
    return fn;
  }

  fn.toString = () => {
    if ((typeof arrayOfValue[arrayOfValue.length - 1]) === 'function') {
      const callback = arrayOfValue[arrayOfValue.length - 1];
      arrayOfValue.length -= 1;
      return arrayOfValue.reduce(callback);
    }
  };
  return fn;
};
