//  lOOPS IN JS

//   1. for loop 

// syntax of for loop
// for (initialization; condition; increment/decrement)

for (let i = 1; i <= 9; i++) 
{
    console.log(i); // prints the number from 1 to 9
}

// 2. while loop

// syntax of while loop

/* while(condition)
{
     code to be executed
} */

let i = 1;
while(i<10){
    console.log(i);
    i++;
}

//  3.  do while loop 

// syntax of do while loop

/* do {
        code to be executed
} while (condition) */

let a=5;
do {
    console.log("hello"); // Executes the code at least once, then checks the condition.
}while(a>10);

// BREAK AND CONTINUE

//   BREAK

for (let i = 1; i <= 10; i++){
    if(i==5){
        break;   // here the loop is breaks
    }
    console.log(i); // prints 1 2 3 4 
}

//  CONTINUE

for (let i = 1; i <= 10; i++){
    if(i==5){
        continue;   // skips the current iteration ...skip 5
    }
    console.log(i);  // prints 1 2 3 4 6 7 8 9 10
}

// 1. Print numbers from 1 to 10 using a for loop.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. Print numbers from 10 to 1 using a while loop.

let i = 10 ;
while(i>=1){
    console.log(i);
    i--;
}
// 3. Print even numbers from 1 to 20 using a for loop.

for (let i = 1; i <= 20; i++) {
    if(i%2==0){
        console.log(i);
    }
}

// 4. Print odd numbers from 1 to 15 using a while loop.

let j = 1;
while(j <= 15) {
    if(j % 2 !== 0) {
        console.log(j);
    }
    j++;
}

// 5. Print the multiplication table of 5 (i.e., 5 × 1 = 5 ... 5 × 10 = 50).

for (let i = 1; i <= 10; i++) {
    console.log(i+" * 5 = "+i*5);
}

// 6. Find the sum of numbers from 1 to 100 using a loop.

let sum = 0;
for(let i=1; i<=100;i++){
    sum=sum+i;
}
console.log("The sum of numbers from 1 to 100 is: "+sum);

// 7. Print all numbers between 1 to 50 that are divisible by 3.


for (let i = 1; i <= 50; i++)
    if(i%3==0){
        console.log(i);
}

// 8. Ask the user for a number and print whether each number from 1 to that number is even or odd. (The screenshot cuts off part of this line, but this appears to be the question.)

let number = prompt("enter a number : ");
for(let i = 1 ; i <=number ; i++){
    if(i%2==0)
        console.log(i+" is even");
    else        console.log(i+" is odd");
}