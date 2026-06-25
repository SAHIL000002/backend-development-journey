// LOCAL STORAGE

// permanant storage of a browser which has the capacity if 5-10mb.
//LocalStorage data permanently store karta hai jab tak manually remove na kiya jaye.

// operations : 
// 1. store data - setItem
// 2. retrive/fetch data - getItem
// 3. remove data - removeItem
// 4. update data from local storage - setItem
// 5. delete all data from the browser - clear

//  storing data in local storage 
// syntax : localStorage.setItem("dataName" , "value")

localStorage.setItem("name" , "sahil"); // storing data 
localStorage.setItem("age" , 23);

let val = localStorage.getItem("name"); // fetching data

localStorage.removeItem("age") // remove item

localStorage.setItem("name" , "aryan"); // update item -> basically it override the new value at the old one 

localStorage.clear(); // delete all data from the browser




// SESSION STORAGE

// temporary storage of the browser which has the capacity of approx 5mb. 
// SessionStorage sirf current browser tab ke liye hota hai aur tab close hote hi data delete ho jata hai.

// all operations are same as the localStorage.

sessionStorage.setItem("name" , "sahil"); // storing data 
sessionStorage.setItem("age" , 23);

let val = localStorage.getItem("name"); // fetching data

sessionStorage.removeItem("age") // remove item

sessionStorage.setItem("name" , "aryan"); // update item -> basically it override the new value at the old one 

sessionStorage.clear(); // delete all data from the browser
















// COOKIES

// it store small amount od data and we can set the exipy time for the cookies.
// cookies ke through hum backend se bhi communicate kar sakte hain.