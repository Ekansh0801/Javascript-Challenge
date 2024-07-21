//Activity - 1
function checkEvenOdd(n){
    return n & 1;
}

let num = 4
if(checkEvenOdd(num) == 1){
    console.log("Odd!!");
}
else{
    console.log("Even!!");
}

function square(n){
    return n * n;
}

console.log(square(5));

//Activity - 2

const max = function(a,b){
    if(a > b) return a;
    else return b;
}

console.log(max(-1,2));

const concatinate = (str1,str2) => {
    return str1 + str2;
}

console.log(concatinate("hello ","world"));

//Activity - 3
const sum = (a,b) => {
    return a + b;
}

console.log(sum(3,4));

const checkChar = (str,ch) => {
    // for(let i = 0; i < str.length; i++){
    //     if(str[i] === ch) return true;
    // }
    // return false;

    return str.includes(str,ch); //Inbuilt function
}

console.log(checkChar("abc",'f'));

//Activity - 4
const product = (a,b = 5) => {
    return a * b;
}

console.log(product(3));
const greet = (name,age = 18) => {
    return name + "_" + age + " Good Morning!!";
}
console.log(greet("Hitesh"));

//Activity - 5
const rep = (x,n) => {
    for(let i = 0; i < n; i++){
        x();
    }
}
const func = () => {
    console.log("JavaScript!!");
}

rep(func,5);

const high = (double,triple,n) => {
    const res1 = double(n);
    const res2 = triple(res1);
    return res2;
}

const double = (n) => {
    return n * 2;
}
const triple = (n) => {
    return n * 3;
}

console.log(high(double,triple,3));
