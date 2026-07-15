// GET => server se data fetch krne ke liye
//POST => server per data bhejne ke liye
// PATCH =>  server per data already hai us data ko update krne ke liye
// DELETE =>server per data h us data ko delete krne ke liye


// server start krne ja raha hu

const app = require("./src/app"); // server ka instance aa gya jise app var me store


app.listen(3000, () => {
  // listen humesha ek callback receive krti hai jo server start hone per exucute ho jati haii

  console.log(" server is running at port number 3000");
});
