//Faulty Calc
let f = 12;
let s = 4;
let operator = "+"; // You can change the operator to "-", "*", or "/"
let result;
let a = Math.random();
if(a<0.1){
    if(operator === "+") {
        result = f - s;
    }
    else if(operator === "-") {
        result = f / s;
    }
    else if(operator === "*") {
        result = f + s;
    }
    else if(operator === "/") {
        result = f ** s;
    }

}
else{
    if(operator === "+") {
        result = f+s;
    }
    else if(operator === "-") {
        result = f - s;
    }
    else if(operator === "*") {
        result = f * s;
    }
    else if(operator === "/") {
        result = f / s;
    }
}
console.log(`The result of ${f} ${operator} ${s} is: ${result}`);