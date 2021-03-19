function myMutation(arr) {
    var newString1;
    var newString2;
    newString1 = arr[0].toLowerCase();
    newString2 = arr[1].toLowerCase();
    
    for (i = 0; i < newString2.length; i++) {
        if (newString1.indexOf(newString2[i]) < 0) return false;
    }

    return true;
}


console.log(myMutation(["hello", "hey"]));
console.log(myMutation(["hello", "Hello"]));
console.log(myMutation(["Marry", "Amy"]));
module.exports = myMutation;