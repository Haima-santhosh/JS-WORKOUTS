function getSquare(num)
{
    const square=num * num ;
    console.log(square);
}
// Function calling, running,invoking
getSquare(2);
getSquare(3);
getSquare(4);


// TO find BMI(height=154 cm,weight = 64kg)

//1.Convert height in meters 
//2.calculate BMI

function getHeightInMeters(heightInCentiMeters)
{
    const heightInMeters = heightInCentiMeters/100;
    return heightInMeters;
}
function findBMI(heightInM,weight)
{
    const bmi=weight/(heightInM * heightInM) ;
    console.log(bmi);
}
const heightInMeters=getHeightInMeters(154);
findBMI(heightInMeters,64);


// FUNCTION REUSABILITY

let num1=10;
let num2=20;
addTwoNumbers(num1,num2);


num1=30;
num2=50;
addTwoNumbers(num1,num2);

num1=100;
num2=150;
addTwoNumbers(num1,num2);

function addTwoNumbers(number1,number2)
{
let result=number1+number2;
console.log(result);
}

// *******************************************************************************************************
// TYPES OF FUNCTIONS
//******************************************************************************************************** 

// 1.Without Argument and Without Return Value

function firstFunction()
{
    console.log("First function called");
    
}
firstFunction();


// 2.With Argument and Without Return Value

function secondFunction(name)
{
const result="Hai" +" " + name;
console.log(result);
}

//const data="Alice"
//secondFunction(data);
secondFunction("Alice");

// 3.With Argument and With Return Value

function thirdFunction(name) {

    const response= "Hello" + " " + name + "! How are You?"
    return response;

    
}
const result=thirdFunction("Bob");
console.log(result);
console.log(new Date());


//4.Without Argument and With Return Value

function fourthFunction()
{
const time=new Date().toTimeString();
return time
}
const response = fourthFunction();
console.log(response);