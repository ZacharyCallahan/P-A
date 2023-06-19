function removeBlanks(string) {
    var newString = string.split(" ");
    return newString.join("");
}
console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));
console.log(removeBlanks("I can not BELIEVE it's not BUTTER"))

function getDigits(string) {
    var newString = string.split("");
    var newArr = [];
    for (var i = 0; i < newString.length; i++) {
        if (newString[i] >= 0) {
            newArr.push(newString[i]);
        }
    }
    return newArr.join("");
}

console.log(getDigits("abc8c0d1ngd0j0!8"))

function acronym(string) {
    var newString = string.split(" ");
    var newArr = [];
    for (var i = 0; i < newString.length; i++) {
        newArr.push(newString[i][0])
    }
    return newArr.join("").toUpperCase();
}
console.log(acronym(" there's no free lunch - gotta pay yer way. "))
console.log(acronym("Live from New York, it's Saturday Night!"))

function countNonSpaces(string) {
    var count = 0;

    for (var i = 0; i < string.length; i++) {
        if (string[i] !== ' ') {
            count++;
        }
    }

    return count;
}
console.log(countNonSpaces("Honey pie, you are driving me crazy"))
console.log(countNonSpaces("Hello world !"))

function removeShorterStrings(arr, val) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length >= val) {
            newArr.push(arr[i]);
        }
    }
    arr.length = 0;
    return newArr;
}
console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4))
console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3))