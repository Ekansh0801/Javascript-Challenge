//Activity - 1
let str1 = `Axar 30`;
console.log(str1);

let str2 = 
`Twinkle Twinkle
       Little Star
          How i wonder how you are`;
console.log(str2);            

//Activity - 2
const arr = ['a','b','c','d','e'];

const [first,second] = arr;
console.log(first);
console.log(second);
console.log(arr);

const book = {
    title:"Harry Potter",
    author:"JK Rowling",
}

const {title,author} = book;
console.log(title);
console.log(author);

// //Activity - 3

let newArr = [...arr,'f','g','h'];
console.log(newArr);

function example(...args){
    return args.reduce((acc,num) => (
        acc + num
    ),0);
}

let sum = example(1,2,3);
console.log(sum);

// //Activity - 4

function def(a,b = 1){
    return a * b;
}

console.log(def(2));

// //Activity - 5
