module.exports = function recursion(tree) {
  const arr = [];
  const subRecursion = function subRec(subTree, lvl) {
    if (!subTree) {
      return;
    }
    if (!arr[lvl]) {
      arr[lvl] = [];
    }
    arr[lvl].push(subTree.value);
    subRec(subTree.left, lvl + 1);
    subRec(subTree.right, lvl + 1);
  };
  subRecursion(tree, 0);
  return arr;
};
