module.exports = function sumOfOther(arr) {
  let sumOfAll = 0;
  arr.forEach((element) => {
    sumOfAll += element;
  });
  return arr.map(element => sumOfAll - element);
};
