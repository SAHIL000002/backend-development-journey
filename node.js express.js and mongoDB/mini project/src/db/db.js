const mongoose = require('mongoose')


async function connectdb() {
    await mongoose.connect("mongodb+srv://backend-js:xDZbv1EpTEBjuqEY@backend-js.wrxl35y.mongodb.net/mini-project1")
    console.log("database connected successfully");
}

module.exports = connectdb