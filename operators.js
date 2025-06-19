//OPERATORS
//********************************************

//1.ARITHMETIC OPERATORS +,-,/,*,%,**, ++i,i++, i--,--i

console.log(1+1);
console.log(2-1);
console.log(3*2);
console.log(4/2);
console.log(9%3);  //Reminder
console.log(3**7); // Power

let variable1=10;
console.log(variable1);//10
variable2=variable1++;
console.log(variable2);// 10
console.log(variable1);  // 11    post increment


let variable3=20;
console.log(variable3);//20
variable4=++variable3;
console.log(variable4);// 21
console.log(variable3);  // 21    post increment




// 2.ASSIGNMENT OPERATOR

let a=10;
a+=2;  // a=a+2;
console.log(a);
a-=2; // a=a-2
console.log(a);
a*=2; //a=a*2
console.log(a);
a/=2; //a=a/2
console.log(a);
a%=4; //a=a%4
console.log(a);


//3.COMPARISON OPERATOR
console.log(5==5);
console.log(5==='5');
console.log(5!=5);
console.log(5!=4);
console.log(5!=='5');
console.log(5!==4);
console.log(5<4);
console.log(5>65);
console.log(5<=10);
console.log(5>=3);

//4.LGICAL OPERATOR

// 1 && 1=1
// 0 && 1=0
// 0 && 0 =0
// 1 && 0=0

console.log(true && true);   true
console.log(true && false);  false
console.log(false && true);  false
console.log(false && false); false



// 1 || 1=1;
// 0 || 1=0;
// 0 || 0 =0;
// 1 || 0=0;

console.log(true || true); true
console.log(true || false); true
console.log(false || true);  true
console.log(false || false); false


// !1=0
// !0=1
console.log(!true) 
console.log(!false)

//4.TERNARY OR CONDITIONAL OPERATOR

let pass=false;
pass?console.log("Student Passed"):console.log("Student Failed")


let num1=10;


let result=num1==10 ? "Success" : "Fail" ;
console.log(result)  // condition ? true: false


// 5. OPTIONAL CHAINING

let person={
    id :1,
    name:"Alice",
    age :25,
    
};
console.log(person);
console.log(person.name);
//console.log(person.address.district); // will not work in the case of nested object
console.log(person.address?.district);














