const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const usermodel = require('./models/schema');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());
  
mongoose.connect(process.env.mongodb)
.then(()=>console.log('connected to mongodb successfully'))
.catch(error=>console.log(error.message))

app.post('/createuser',async(req,res)=>{
 await usermodel.create(req.body)
  .then(users=>{res.status(201).json({message:"user created successfully"})
console.log(users)})

  .catch(error=>{res.status(404).json({message:"user not created"})
console.log(error.message)}
)
})
app.get('/getusers',async(req,res)=>{
try {
await usermodel.find({})
.then(users=>{
    res.status(200).json((users))
    console.log(users)
})
} catch (error) {
    res.status(500).json({message:"users not found"})
}
})
app.get('/getuser/:id',async(req,res)=>{
  const id = req.params.id;
  try {
   const fetchedusers = await usermodel.findById({_id:id})
    res.status(200).json(fetchedusers)
  } catch (error) {
    console.log(error)
  }
})
  
const port = process.env.port||9000

app.listen(port,()=>{
console.log(`server is running on port ${port}`)
}
)