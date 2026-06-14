//  ARRAY BASICS 

// creating a array

let arr = [1, 2, 3, 4, 5];

// accessing the array or elements of the array

console.log(arr[0]);  // output : 1       
console.log(arr);     // output : [1,2,3,4,5]
console.log(arr[-1]);  //   undefined

//  modify the array

let a = [1, 3, 4, 5, 6, 8];
a[0] = 4;
console.log(a);  // here the value 1 is replace by 4 in the array

// ARRAY METHODS 

// 1. push()

let b = [1, 2, 3, 4, 5];
b.push(4000);  // it insert the value 4000 at the end of the array

console.log(b);  // output : [1,2,3,4,5,4000]

//  2. pop()

let fruits = ["apple", "banana", "mango", "orange", "lichi"];
fruits.pop();  //  it remove the last element fron the array 
console.log(fruits);  // output : ['apple', 'banana', 'mango', 'orange']

// 3. shift()

let c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
c.shift()  // it remove the first element from the array 

console.log(c); // output : [2, 3, 4, 5, 6, 7, 8, 9, 10]

// 4. unshift() 

let d = [1, 2, 3, 4, 5];
d.unshift(0)  // it add the element at the beginning of the array

console.log(d);  // output : [0, 1, 2, 3, 4, 5]

// 5. splice(index , number of values you want to remove)

let months = ['jan', 'fab', 'march', 'april', 'may', 'june'];
months.splice(1, 2); // it remove the elements starting from index 1 and remove 2 elements

console.log(months); // output : ['jan', 'april', 'may', 'june']

// 6. slice

let e = [1, 2, 3, 4, 5];
console.log(e.slice(1, 4)); // output : [2, 3, 4]
// start from index 1 and end to index 3(4-1)

//  7. index0f

let f = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(f.indexOf(6));  // output : 5

// 8. reverse 

let g = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(g.reverse()); // output : [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// 9. sort

let h = [4,5,2,8,4,3];
console.log(h.sort());

// sort in ascending order

let sorted = h.sort(function(a,b){
    return a-b;
})
console.log(sorted);

// sort in decending order

let reversSorted = h.sort(function(a,b){
    return b-a;
})
console.log(reversSorted);

// 10. forEach


