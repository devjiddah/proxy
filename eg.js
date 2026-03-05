const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
require ('dotenv').config();
const usermodel=require('./models/schema.js')

const app=express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.mongodb)
.then(()=>console.log('connected to mongo db'))

app.post('/createuser',(req,res)=>{
  usermodel.create(req.body)
  .then(data=>res.status(201).json(data))
  .catch(err=>console.log(err.message))
})

app.get('/adduser',async(req,res)=>{

 await  usermodel.find({})
.then(user=>res.status(200).json(user))
.catch(err=>console.log(err.massage))

}) 


app.put('/adduser/:id',async(req,res)=>{
  try {
    const id = req.params.id
    const updateUser = await usermodel.findById(id)
    if(!updateUser || updateUser.length === 0){
      return res.status(404).json({errorMessage: "user not fund..."})
    }
    const update = await usermodel.findByIdAndUpdate(id,req.body,{new:true})
    res.status(200).json({Message: "user updated successfull..."})
  } catch (error) {
    console.log(error.message)
  }

}
)

const port=process.env.port||6000
app.listen(port,()=>console.log(`server is running on ${port}`))
