//write prg to calculate factorial using 1. reduce and 2. for loops
//1.
let n = [1, 2, 3, 4, 5]; // Example array representing the numbers to calculate factorial for
let Arr = n.reduce((prev, next)=>{
    return prev*next ;
  });


//2.
function factorialForLoop(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
// Example usage:
console.log(factorialForLoop(5)); // Output: 120
console.log(Arr); // Output: 120 (for the reduce method)
