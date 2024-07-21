//Activity - 1 

let arr = [1,2,3,4,5]
console.log(arr);

console.log(arr[0]);
console.log(arr[arr.length - 1]);

//Activity - 2

arr.push(6,7);
console.log(arr);

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift(9);
console.log(arr);

//Activity - 3

newArr = arr.map((x) =>{
    return x * 2;
})

console.log(newArr);

evenNum = arr.filter((x) => {
    return (x & 1) === 0;
})

console.log(evenNum);

const sum = arr.reduce((acc,curr) => {
    return acc += curr;
},0)

console.log(sum);

//Activity - 4


for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

arr.forEach(element => {
    console.log(element); 
});



// Activity - 5

let mat = [[1,2,3],[4,5,6],[7,8,9]];
console.log(mat);

console.log(mat[1][1]);

