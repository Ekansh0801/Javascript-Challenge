// Activity - 1
for(let i = 1; i <=10; i++){
    console.log(i);
} 

for(let i = 1; i <= 10; i++){
    console.log(5 * i);
}

//Activity - 2
let i = 1;
let sum = 0;
while(i <= 10){
    sum += i;
    i++;
}
console.log(sum);

let num = 10;
while(i >= 1){
    console.log(i);
    i--;
}

//Activity - 3
x = 1;
do{
    console.log(x);
    x++;
}while(x <= 5);

let n = 5;
let fact = 1;
do{
    fact = fact * n;
    n--;
}while(n >= 1)

    console.log(fact);

    let a = 5;
for(let i = 0; i < a; i++){
    let row = "";
    for(let j  = 0; j <= i; j++){
        row += "*";
    }
    console.log(row);
}    

for(let i = 1; i <= 10; i++){
    if(i == 5) continue;
    console.log(i);
}

for(let i = 1; i <= 10; i++){
    if(i == 7) break;
    console.log(i);
}