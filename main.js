const a = multiply(65536, 5);
const b = add(65536, 5);

function printMultiply(num, multiple) {
    console.log(multiply(num, multiple))
}

function alertMultiply(num, multiple) {
    alert(multiply(num, multiple))
}

function multiply(num, multiple = 2) {
    return num * multiple
}

function add(num, num2 = 2) {
    return num + num2
}

console.log(a);
console.log(b);