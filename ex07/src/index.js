function largestNumFromArr(arr){
    var maxNumArray = [];
    for (var i = 0; i < arr.length; i++) {
        var max = arr[i][0];
        for (var j = 0; j < arr[i].length; j++) {
            if(max < arr[i][j]) max = arr[i][j];
        }
        maxNumArray.push(max);
      }
    
    return maxNumArray;
}
console.log(largestNumFromArr());
module.exports = largestNumFromArr;
