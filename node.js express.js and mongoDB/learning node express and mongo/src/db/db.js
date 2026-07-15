const mongoose  = require('mongoose')

async function connectDB(){
    await mongoose.connect("mongodb+srv://backend-js:xDZbv1EpTEBjuqEY@backend-js.wrxl35y.mongodb.net/backend-js")
    console.log("connected to db")
}

module.exports = connectDB