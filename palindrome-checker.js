module.exports = function(str) {
    str = str.toLowerCase();
    let letters = [];
    let reverseWord = "";
    for (let i = 0; i < str.length; i++) {
        let item = str.charAt(i);
        if ((item >= "a" && item <= "z") || (item >= "0" && item <= "9")) {
            letters.push(item);
        }
    }
    let forwardWord = letters.toString();
    reverseWord = letters.reverse().toString();
    return (reverseWord === forwardWord);
}
