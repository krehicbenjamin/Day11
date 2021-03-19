function myBouncer(arr) {
  var falsyValues;
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    falsyValues = Boolean(arr[i]);

    if (falsyValues === true) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(myBouncer([false, null, 0, NaN, undefined, ""]));
module.exports = myBouncer;
