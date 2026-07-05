// module patterns

// ,odule pattern ek desiggn pattern hota hai jisme apna code ek self executingg functiion (IIFE) ke andr likhte hai , taki variables and functions private rahe.

// eske andar se hum sirf cheezein return karte hai jo bahar use karni ho .

// is pattern ka maiin faydad hai data hiding (encapsulation) ,aur clean structure , taki code secure , reusable aur mangeable ban sake .

let Bank = (function () {
  let balance = 15000;

  function checkbslance() {
    console.log(balance);
  }

  function setbalance(val) {
    balance = val;
  }

  function withdraw(val) {
    if (val <= balance) {
      balance -= val;
      console.log(balance);
    }
  }
  return {checkbslance , setbalance , withdraw};

})();


Bank.withdraw(5000);
Bank.setbalance(20000);
Bank.checkbslance();
Bank.withdraw(20000);


// revealing module pattern

// revealing module pattern me hum private function ko return karte hai aur unka naam change kar dete hai , taki hum unko bahar use kar sake .

// note that function jo hum return karte hai uska bs naam change kar dete hai , etne se wo reviling module pattern kehlata hai .


let mall = (function () {
  let items = 150;

  function checkItems() {
    console.log(items);
  }

  function addItems(val) {
    items += val;
  }

  function sellingItems(val) {
    if (val <= items) {
      items -= val;
      console.log(items);
    }
  }
  return{
    kitneItems : checkItems,
    nayaAddItems : addItems,
    bechneKeBaadLeft : sellingItems
  }

})();


mall.kitneItems();
mall.nayaAddItems(200);
mall.kitneItems();
mall.bechneKeBaadLeft(50);
