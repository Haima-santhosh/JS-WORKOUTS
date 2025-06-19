// DATA TYPES

// 1. PRIMITIVE DATA TYPES IMMUTABLE()

let priceOfApple=100; //Number
let priceOfMango=120.60;


console.log(typeof priceOfApple);
console.log(typeof priceOfMango);

let productName="Apple"; // String
let productType='Fruits';
let productShape=`Round`;  //backtick

console.log(typeof productName);
console.log(typeof productType);


let a=10;
let b=20;
let sum = a+b;
console.log(sum)
console.log(typeof sum);



let c=10;
let d="20";
let add = c+d;
console.log(add)
console.log(typeof add); // String Concatenation

// Boolean

let gameWon = true; 
console.log(typeof gameWon);
console.log(gameWon)
let gameLoss = false;
console.log(gameLoss);
console.log(typeof gameLoss);


 //Undefined

let test; 
console.log(test) 
console.log(typeof test);


//Null

let petName = null;
console.log(petName)
console.log(typeof petName); 


// **********************************************************************************************************************************

//(NOT IMPORTANT-RARE CARSES)

let largeNumber=BigInt(1234567888544444444444444444444444444444444444444985444444444444444444444433)  //BigInteger
console.log(typeof largeNumber);



let mySymbol=Symbol("Hello");
console.log(typeof mySymbol);

// ********************************************************************************************************************************


//2. REFERENCE DATA TYPE OR NON PRIMITIVE

// OBJECT

const person ={
    name:"Alice",
    age:20,
    place:"TVM",
    married:true,
    show:function()
    {
        console.log('Hello');
    },
    array:[1,"hello",true,null,undefined]
};
console.log(person);
console.log(typeof person); 

console.log(person.name); // Alice
console.log(person.show);
person.show();



let person2={};
person2.name="Doe";

console.log(person2);


console.log(person2.name); // Doe









const students =["Alice","Bob","Jhon","Sam",person];  //Array
console.log(students)
console.log(students[2])
console.log(typeof students);


// DIFFRENCE BETWEEN PRIMITIVE AND REFERENCE DATATYPES


let num= 10;
let numCopy=num;
console.log(num)
console.log(numCopy)
num=20;
console.log(num)
console.log(numCopy)



let name="Alice";
let nameCopy=name;
console.log(name)
console.log(nameCopy)
name="Jhon";
console.log(name)
console.log(nameCopy)


const emplyoee={
    name:"Akhil",
    age:42
};
const emplyoeeCopy=emplyoee;

console.log(emplyoee)
console.log(emplyoeeCopy)

emplyoee.name="Alice";
emplyoee.age=20;

console.log(emplyoee)
console.log(emplyoeeCopy)

let array=[1,2,3,4,5];
let arrayCopy=a;
console.log(array)
console.log(array)
array[0]=0;
console.log(array)
console.log(array)

