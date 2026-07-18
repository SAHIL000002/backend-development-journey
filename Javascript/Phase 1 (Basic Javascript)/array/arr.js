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

// 6. slice()

let e = [1, 2, 3, 4, 5];
console.log(e.slice(1, 4)); // output : [2, 3, 4]
// start from index 1 and end to index 3(4-1)

//  7. index0f()

let f = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(f.indexOf(6));  // output : 5

// 8. reverse ()

let g = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(g.reverse()); // output : [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// 9. sort()

let h = [4, 5, 2, 8, 4, 3];
console.log(h.sort()); // it sort the element as a string. if we write 2,3,4,10,9,4   than it sort as 10,2,3,4,4,9  

// sort in ascending order

let sorted = h.sort(function (a, b) {
    return a - b;
})
console.log(sorted);

// sort in decending order

let reversSorted = h.sort(function (a, b) {
    return b - a;
})
console.log(reversSorted);

// 10. forEach()

let i = [11, 3, 5, 64, 3];

i.forEach(function (val) {  // foreach her ek element ke liye function ko chalata h.
    console.log(val);
})

// if we write this
i.forEach(function (val) {
    console.log(val + 5); // array ke her element me 5 jod dega
})

// 11. map()

let arr1 = [1, 2, 3, 4, 5];

// map sirf tb use karna hai jab ek naya array banana h pichhle array ke data ke basis per

// let suppose hame diye gye array ke elements ka squre nikalna h aur use ek array me store krna h than...

let newArr = arr1.map(function (val) {
    return val * val; // Note : jo value return hogi wahi sirf new array me store hogi.    
})
console.log(newArr);  // return is compulsary..

// cases for map 

// 1.
let arr2 = [11, 4, 3, 5, 43, 21];

let newArr2 = arr.map(function (val) {
    return 12;
})

console.log(newArr2); // it return only 12 so the new array only contains 12 5 times.
// output : [12, 12, 12, 12, 12]

// 2. 

let arr3 = [1, 2, 3, 4, 5];

let newArr3 = arr3.map(function (val) {

})
console.log(newArr3); // it prints undefined 5 times because no any value return in the new array
// output : [undefined, undefined, undefined, undefined, undefined]

// 3. 

let arr4 = [1, 2, 3, 4, 5];

let newArr4 = arr4.map(function (val) {
    if (val > 3) return val;  // it return the value that is greater than three and if the number is not greater then 3 than at that pace it store undefined.
})

console.log(newArr4); // output : [undefined, undefined, undefined, 4, 5]

//  12. filter()

// note karne wali baat ye hai ki esme agr condition satisfy nhi hoti h to undefined return nhi hoga , wo value skip ho jayegi..

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let updateNum = num.filter(function (val) {
    return val > 5;  // yaha par agar condition satisfy hoti h to vo value new array me store ho jati h warna nhi hoti.
})

console.log(updateNum); // output : [6, 7, 8, 9, 10]

// 13. reduce()

// ek array se ek value banana means array ko reduce karna ek single value me..

let r = [1, 2, 3, 4, 5];
let ans = r.reduce(function (accumulator, val) {  // accumulator ek variable h jiski default value set ki jati h last me
    return accumulator + val;
}, 0);  // 0 accumulator ki value h jo initialize ki gyi h.

console.log(ans);  //  15 

// another example of reduce

let ll = [10, 2, 3, 4, 5];
let output = ll.reduce(function (acc, val) {
    return acc * val;
})
console.log(output); // 1200

// 14. some()

// it returns true or false only if any element satisfies the condition or not ..

let si = [10,30,32,90];
let an = si.some(function(val){
    return val<85;    // returns true and store in the an
})

console.log(an); // output : true


// 15. every()

// it also returns true or false but all the elements of the array should satisfy the condition.

let se = [10,30,32,90];
let answ = se.every(function(val){
    return val<85;    // returns false and store in the answ because 90 is not less than 85..
})

console.log(answ); // output : false

// 16. find()

// it returns only thefirst  value which satisfies the given condition

let sgf = [10,30,32,90];
let ansss = sgf.find(function(val){
    return val>30;    // returns 32 and store in the ansss because it is the first value which is greater than 30
})

// DESTRUCTURING

let as = [1,2,3,4,5];
let [ab,bc]=as;
console.log(ab);
console.log(bc);

let sdf = [1,2,3,4,5];
let [g1,g2, ,g4] = sdf;
console.log(g1,g2,g4);

// spread OPERATOR

//  ... is a spread operator in array it copies all the value and store in where you want 
let asd = [1,2,3,4,5,6,7,8,9];
let asd2 = [...asd];
console.log(asd2);

//if we make any changes in the asd2 than it does not affect on the main array
let asd3 = [1,2,3,4,5,6,7,8,9];
let asd4 = [...asd3];
asd4[0]=100;
console.log(asd3, asd4);



