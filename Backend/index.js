const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cvSchema = require('./model/cvSchema')

const app = express()

app.use(express.json())
app.use(cors())


dotenv.config({path : './.env'})

app.get('/', async (req, res) => {

    const response = await cvSchema.find()

    res.send(response)
})

app.post('/postItem', async (req, res) => {

    const response = await cvSchema.create(req.body)


    if(response) {
        res.send({message : "Post Successfull", success : true})
    }   
})

// app.patch('/updateItem/:id', async (req, res) => {
//     const {id} = req.params

//     const response = await cvSchema.findOneAndUpdate(
//         {_id: id},
//         {$set: req.body},
//         {new : true}
//     )
    
//     if(response){
//         res.send({message : "Item updated", success : true})
//     }
// })


// app.delete('/deleteItem/:id', async (req, res) => {
//     const {id} = req.params

//     const response = await cvSchema.findOneAndDelete(
//         {_id : id}
//     )

//     if(response){
//         res.send({message : "Item deleted", success : true})
//     }
// })


mongoose.connect(process.env.MONGODB_URL).then(() => {

    console.log('MongoDB connected');
    

    app.listen(process.env.PORT, () => {
        console.log('Server is running');
    })
})