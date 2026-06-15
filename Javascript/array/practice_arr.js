// create an array with 3 fruits and prints the second fruit.

let fruits = ['apple','banana','orange'];
console.log(fruits[1]);

// add "mango" at the end and "pineapple" at the beginning of this array

fruits.push("mango");
fruits.unshift("pineapple");

console.log(fruits);

// replace "banana" with "kivi" in the array

fruits[2]= "kivi";
console.log(fruits);

// remove the last fruit from the array and print the removed fruit

console.log(fruits.pop());

// insert "red" and "blue" at index 1 in this array

let colors = ['green','yellow'];

colors.splice(1,0, "red" , "blue");
console.log(colors);

// extract the only the middle 3 elements from the array

let items = [1,2,3,4,5];
console.log(items.slice(1,4));

// sort the following array in ascending order and then reverse it

let names = ["zara","arjun","mira","bhavya"];
let sortedNames = names.sort();

console.log(sortedNames);
let reverseNames = sortedNames.reverse();
console.log(reverseNames);

//  use map() to square each number

let arr = [1,2,3,4];
let newarr = arr.map(function(val){
    return val*val;
})
console.log(newarr);  // output : [1, 4, 9, 16]

// use filter() to get only the numbers greater than 10

let arr1 =[5,12,8,20,3];

let newarr1 = arr1.filter(function(val){
    if (val >10) return val;
})
console.log(newarr1); // output : [12, 20]

// use reduce() to find the sum od this array

let arr2 = [10,20,30];
let newarr2 = arr2.reduce(function(acc , val){
    return acc + val;
} , 0)
console.log(newarr2);

// use find() to get the first number less than 10

let arr3 = [12,15,3,8,20];
let ans = arr3.find(function(val){
    return val <10 ;
})
console.log(ans); // output : 3

// use some() to check if any student has scored below 35

let scores = [85,92,30,78,95];
let result = scores.some(function(val){
    return val < 35;
})
console.log(result); // output : false

// use every() to check if all numbers are even

let arr4 = [2,4,6,8];
let result4 = arr4.every(function(val){
    return val % 2 === 0;
})
console.log(result4);  // output : true

// destructure this array to get firstname and lastname

let fullname = ["harsh","sharma"];
let [firstname, lastname] = fullname;
console.log(firstname); // output : harsh
console.log(lastname);  // output : sharma 

// merge two arrays using spread operator

let a = [1,2];
let b = [3,4];
let c = [...a,...b];
console.log(c);