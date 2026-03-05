const express=require('express')
const cors =require('cors');
const mongoose=require('mongoose');


const app=express();
app.use(cors());
app.use(express.json());
  
mongoose.connect('mongodb+srv://2136jiddah:20252048@cluster0.imzbenc.mongodb.net/')
.then( ()=>console.log('connected to mongodb successfully'))
.catch((err)=>{
    console.log(err.message)
})
const port = 5000;
app.listen(port,()=>console.log(`server is running on port ${port}`))


