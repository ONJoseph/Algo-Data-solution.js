function repeatStringNumTimes(str, num) {
    var repeatedString = "";
    while (num > 0) {
        repeatedString += str;
        num--;
    }
    return repeatedString;
}
module.exports = repeatStringNumTimes
