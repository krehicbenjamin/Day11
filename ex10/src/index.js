function mySplice(arr1, arr2, n) {
  for (var i = arr1.length - 1; i >= 0; i--) {
    arr2.splice(n, 0, arr1[i]);
    n++;
  }
  return arr2;
}

console.log(mySplice([1, 2, 3], [4, 5], 2));
module.exports = mySplice;
