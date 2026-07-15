const express = require('express')
const app = express()
const multer = require('multer')
app.use(express.json()); // this is for raw data format


const upload = multer({storage : multer.memoryStorage() })




app.post("/create-post" , upload.single('image') ,async (req  ,res )=>{
    console.log(req.body)
})



module.exports = app