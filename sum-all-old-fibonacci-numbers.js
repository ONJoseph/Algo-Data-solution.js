module.exports = function(num) {
    //create fibonacci function  
    function fibonacci(n) {
        let arr = [1, 1];
        for (let i = 2; i <= Math.sqrt(n) + 1; i++) {
            arr.push(arr[i - 1] + arr[i - 2]);
        }
        return arr;
    }
    let brr = fibonacci(num);
    return brr.filter(n => n % 2 !== 0 && n <= num).reduce((a, b) => a + b);
}
