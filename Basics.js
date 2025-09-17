//Programming Basics

//1. Write a function thats takes in a number and returns its sum 

function sumOfNumber(num1,num2){
    let sum = num1+num2;
    return sum;
}

let result = sumOfNumber(5,10);
console.log(result);


//2. Write a function that takes in the values and returns its multiply 

function multiplyOfNumber(num1,num2){
    let multiply = num1 * num2;
    return multiply;
}
let result1 = multiplyOfNumber(5,10);
console.log(result1);

//3. Write a function that takes a value and gives a square of the number 

function squareOfNumber(num){
    let square = num * num;
    return square;
}
let result2 = squareOfNumber(5);
console.log(result2);


//4. Write a function to check eligibility to vote 

function checkEligibilityToVote(age){
    if(age < 0){
        return "Invalid age";
    }
    if(age >= 18){
        return "Eligible to vote";
    }else{
        return "Not eligible to vote";
    }
}

let result3 = checkEligibilityToVote(-1);
console.log(result3);


//5. Write a function to check if the number is even or odd 


function checkEvenOrOdd(num){
    if(num==0){
        return "Neither even nor odd";
    }
    else if(num>0){
        if(num%2==0){
            return "Even number";
        }else{
            return "Odd number";
        }
    }else{
        return "Invalid number";
    }
}
let result4 = checkEvenOrOdd(2);
console.log(result4);
    

