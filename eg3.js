// const express = require('express');
// const cors = require('cors');
// const  mongoose = require('mongoose');
// require ('dotenv').config();
// const Items = require('./models/itemsSchem.js')

// const app = express();
// app.use(cors());
// app.use(express.json());

// mongoose.connect(process.env.mongodb)
// .then(()=>console.log('connected to mongo db successfully'))

// app.post('/createItem',async(req,res)=>{
//    try {
//      await Items.create(req.body)
//     .then(item=>res.status(201).json(item))
//    } catch (error) {
//     res.status(404).json({massage:"item not found"})
//    }


// }
// ) 
// app.get('/getitems',(req,res)=>{
//  Items.find({})
//  .then(items=>res.status(200).json(items))
//  .catch(err=>res.status(404).json({massage:"items not found"}))
// })
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Items = require('./models/itemsSchem');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());


// app.post('/CreateItem', async (req, res) => {
//   try {
//     await Items.create(req.body)
//       .then(items => res.status(201).json({ message: "item created successfully" }))
//       console.log(Items)
//   } catch (error) {
//     res.status(500).json(error.message)
//     console.log(error)
//   }
// })

app.post('/createitem',async(req,res)=>{
  try {
  const createItem = await Items.create(req.body) 
  res.status(201).json(createItem)
  console.log(createItem)
  }  
  catch (error) {
    res.status(500).json(error)
    console.log(error.message)
  }
})
// app.get('getItems',async(req,res)=>{
//   try {
//     await  Items.find({})
//     .then(items=>res.status(201).json(items))

//   }
//    catch (error) {
//     console.log(error)
//   }

// })
app.get('/getItems', (req, res) => {
  Items.find({})
    .then(items => res.json(items))
    .catch(err => console.log(err))
})
// app.get('/getItem/:id', async (req, res) => {
//   const fetchedItem = await Items.findById(req.params.id)
//     .then(items => res.json("items fetched successfully", fetchedItem))
//     .catch(error => res.json(error))
// }
// )
 app.get('/getItem/:id', async (req, res) => {
  try {
    const id = req.params.id
    const item = await Items.findById({_id:id})
    res.status(200).json(item)
    console.log(item)
  } catch (error) {
    console.log(error)
  }

 })
 app.put('/updateUser/:id',async(req,res)=>{
  const id = req.params.id 
  try {
   const updatedItem =  await Items.findByIdAndUpdate({_id:id},{
    item:req.body.item,
    price:req.body.price,
    quantity:req.body.quantity,
    description:req.body.description    
  })
  res.status(200).json(updatedItem)
  
  console.log(updatedItem)
  } catch (error) {
     console.log(error)

  }
  
 
 })

 app.delete('/deleteItem/:id',async (req,res)=>{
  const id = req.params.id
  try {
    const Deleteditem = await Items.findByIdAndDelete({_id:id})
    res.status(200).json("item deleted successfully")
    console.log(Deleteditem)
  } catch (error) {
    console.log(error)
  }
 })


mongoose.connect(process.env.mongodb)
  .then(() => console.log('connected to mongoodb successfully'))
  .catch(err => console.log(err))


const port = process.env.port || 6000
app.listen(port, () => console.log(`server is running on port ${port}`))















