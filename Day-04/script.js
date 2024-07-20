// Activity - 1

let num = 5;
if(num > 0){
    console.log(num, "is Positive!");
}
else if(num < 0){
    console.log(num, "is Negative!");
}
else{
    console.log(num, "is Zero!");
}

// Activity - 2
let x = 2,y = 3,z = 4
if(x > y){
    if(x > z){
        console.log(x, "is largest!!");
    }
    else{
        console.log(z, "is largest!!");
    }
}

else{
    if(y > z){
        console.log(y, "is largest!!");
    }
    else{
        console.log(z, "is largest!!");
    }
}


// Activity - 3
let day = 2
switch(day){
    case 1:{
        console.log("Monday!");
        break;
    };
    case 2: {
        console.log("Tuesday!");
        break;
    };
    case 3: {
        console.log("Wednesday!");
        break;
    };
    case 4: {
        console.log("Thursday!");
        break;
    };
    case 5: {
        console.log("Friday!");
        break;
    };
    case 6: {
        console.log("Saturday!");
        break;
    };
    case 7: {
        console.log("Sunday!");
        break;
    };
    default : {
        console.log("Enter valid Number");
    }
}

let marks = 70
switch(true){
    case marks >= 90 && marks <= 100:{
        console.log("A!");
        break;
    };
    case marks >= 80 && marks < 90: {
        console.log("B!");
        break;
    };
    case marks >= 70 && marks < 80: {
        console.log("C!");
        break;
    };
    case marks >= 60 && marks < 70: {
        console.log("D!");
        break;
    };
    case marks >= 50 && marks < 60: {
        console.log("E!");
        break;
    };
    default : {
        console.log("F");
    }
}

//Activity - 4
let n = 5;
console.log(n & 1 === 1 ? "odd!" : "even!");

//Activity - 5
let year = 2016
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("Leap Year!!");
} else {
    console.log("Non Leap Year!!");
}