module.exports = function(strA, strB) {
    // build the object that holds strA data
    const aCharObject = buildCharObject(strA);
    // build the object that holds strB data
    const bCharObject = buildCharObject(strB);
    // compare number of keys in the two objects
    // (anagrams must have the same number of letters)
    if (Object.keys(aCharObject).length !== Object.keys(bCharObject).length) {
        return false;
    }
    // if both objects have the same number of keys
    // we can be sure that at least both strings
    // have the same number of characters
    // Now we can compare the two objects to see if both
    // have the same letters in the same amount
    for (let char in aCharObject) {
        if (aCharObject[char] !== bCharObject[char]) {
            return false;
        }
    }
    // if both the above checks succeed,
    // you have an anagram: return true
    return true;
};
const buildCharObject = (str) => {
    const charObj = {};
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        let item = str.charAt(i);
        if ((item >= "a" && item <= "z") || (item >= "0" && item <= "9")) {
            charObj[item] = charObj[item] + 1 || 1;
        }
    }
    return charObj;
};
