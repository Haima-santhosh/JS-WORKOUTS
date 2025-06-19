// 1. if else

// const day=1;
// if(day==1)
// {
//     console.log("Sunday");
    
// }
// else
// {
//     console.log("Anyday");
    
// }

// let day=2;
// if(day==1)
// {
//     console.log("Sunday");
    
// }
// else if (day==2)
// {
//     console.log("Monday");
    
// }
// else{
//     console.log("Anyday");
    
// }

// 2.switch

let day=3;

switch(day)
{
    case 1 :
        console.log("Sunday");
        break;
    case 2 :
        console.log("Monday");
        break;
    default :
    console.log(`${day} is not a day!`);
        
            
        
}

// 3. for loop

// for(initialization;condition;increment / decrement)


// for(i=1;i<=5;i++)
// {
//     console.log(i);
// }


// for(j=5;j>=1;j--)
// {
//     console.log(j);
// }

for(i=1;i<=10;i++)
{
    if(i%2==0)
    {
        console.log(i +" "+ "is even");
        
    }
    else{
      console.log(i +" "+ "is odd");
           
    }
}

for(i=5;i>=1;i--)
{
    if(i==1)
    {
        console.log("Happy New Year");
        
    }
    else{
        console.log(i);
        
    }
}


//4. while

// let count=1;

// while(count<=10)
// {
//     console.log(count);
//     count++;
    
// }
// console.log("Out of loop");

// do while (exit control loop)

let count = 10;
do {
    console.log(count);
    count++;
} while (count < 10);     // 10
