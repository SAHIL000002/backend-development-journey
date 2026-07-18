//  file system 

const fs  = require('fs');   // import the functionality of file system

// // 1 . fs.writefile("filename" , "data" , callback function (err))  

// // agr file pahle se hai to data ko overwrite kr deta hai means purana data ki jagah naya data 
// //agr file exist nhi krta to new file create krta h and data likh deta h

// fs.writeFile("new.txt" , "mai first time aaya hu" , function(err){
//     if(err) console.log(err)
//         else console.log("done1");
// })

// fs.writeFile("new.txt" , "hello mera name hai sahil and mai 2second hu" , function(err){   // this code overwrite the data on the old data
//     if(err) console.log(err)
//         else console.log("done2");
// })

// // 2.  fs.appendFile("filename" , "data" , callback function(err))   // ye data ko overwrite nhi karta balki new data ko file me add kr deta h


// fs.appendFile("new.txt" , " aur mai 3rd hu " , function(err){   // this code add the data in the existing file
//     if(err) console.log(err)
//         else console.log("done3");
// })

// // 3. fs.rename("old filename", "new filename", callback function(err))  

// // file name is changed to the new one 


// fs.rename("new.txt" , "newAgain.txt" , function(err){

//     if(err) console.log(err)
//         else console.log("done4");

// })

// // 4. readfile

// fs.readFile("newAgain.txt", (err, data) => {     // it give the buffer values 
//     console.log(data);
// });

// fs.readFile("newAgain.txt", "utf8", (err, data) => {     // it give the actual data
//     console.log(data);
// })

// // 5. readFileSync


// // 5. unlink ("filename", callback function(err))

// // it is used to delete the file

// fs.unlink("new.txt" , function(err){
//     if(err) console.log(err);
//     else console.log("file deleted");
// })

// // 6. copyFile("source", "destination", callback function(err))

// // it is used to copy the file from source to destination

// fs.copyFile("newAgain.txt" , "./copy/data.txt" , function(err){
//     if (err) console.log(err);  
//     else console.log("file copied");
// })

// fs.rmdir(("path of the folder", function(err))

// it delete the folder if the folder is empty

fs.rmdir("copy" , function(err){
    if(err) console.log(err);
    else console.log("folder deleted");
})

