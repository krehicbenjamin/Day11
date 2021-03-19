function splitArrayInGroups(arr, n) {
    var result = [];

    for (var i = 0; i < arr.length; i += n) {
        var tmp = arr.slice(i, i + n);
        result.push(tmp);
    }
    result = result.slice(0);
    result.splice(n);
    return result;

}

console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 3));
module.exports = splitArrayInGroups;