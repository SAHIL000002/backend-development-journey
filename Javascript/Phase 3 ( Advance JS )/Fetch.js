// Fetch API JavaScript ki built-in API hai jo server ko HTTP request bhejne aur usse data asynchronously receive karne ke liye use hoti hai, aur ye hamesha ek Promise return karti hai.

// ye hamesha ek promise return karti hai, jisse hum .then() aur .catch() ke saath handle kar sakte hain.

fetch("https://randomuser.me/api/?results=5")
  .then(function (rawdata) {
    // fetch ka rawdata abhi redable format me nhi hai .
    return rawdata.json(); // ab readable ho gya
  })

  .then(function (data){
    console.log(data.results);
  })


  .catch(function (err) {
    console.log(err);
  });
