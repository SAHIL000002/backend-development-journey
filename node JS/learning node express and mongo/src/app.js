const express = require('express')
const noteModel = require('./models/note.model')

const app = express()
app.use(express.json());

// post /notes = create a note 
// GET /notes = get all notes
// DELETE /notes/:id = delete a note
// PATCH /notes/:id = update a note

// post 

app.post("/notes" , async (req ,res)=>{
    const data = req.body   // {title , description}
    await noteModel.create({
        title : data.title,
        description : data.description
    }) 
    res.status(201).json({
        message : "note created"
    })
})

// get 

app.get("/notes"  , async(req , res)=>{
    const notes = await noteModel.find()    // sare notes yaha aa jayenge : find humesha [ ] return karta hai agr notes empty hai fir bhi ... but findOne() me agr condition satisfy nhi hue to null dega.

    // const notes = await noteModel.findOne({  //  only fetch the data where the title is java developer.
    //     title : "java developer"  // if the title is not exist than it gives null.
    // })   

    res.status(200).json({
        message:"note fetched",
        notes : notes
    })
})

// delete

app.delete("/notes/:id" , async(req , res)=>{
    const id = req.params.id
    await noteModel.findOneAndDelete({
        _id : id
    })
    res.status(200).json({
        message : "note deleted"
    })
})

// update 

app.patch("/notes/:id" , async(req , res)=>{
    const id = req.params.id
    const description = req.body.description
    await noteModel.findOneAndUpdate({_id : id } , {description : description })
    res.status(200).json({
        message : "note updated"
    })
})

   
module.exports = app