function multiplyArrayFunction(myArray) {
  var product = 1;
  var sum = 0;
  var arr = [];

  for (var i = 0; i < myArray.length; i++) {
    for (var j = 0; j < myArray[i].length; j++) {
      product *= myArray[i][j];
      sum += myArray[i][j];
    }
  }
  arr.push(product);
  arr.push(sum);
  return arr;
}
console.log(multiplyArrayFunction([[2], [5, 6, 7], [8, 9]]));
module.exports = multiplyArrayFunction;
