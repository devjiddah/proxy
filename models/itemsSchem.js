// const mongoose = require ('mongoose');

// const ItemSchema = new mongoose.Schema({
// item:{
// type:String,
// required:true
// },
// price:{
// type:Number,
// required:true
// },

// quantity:{
//     type:Number,
//     required:true

// },
// description:{
// type:String,

// },

 
// },

// {
//    Timestamps:{
// require:true
//    },
// })
//  const Items = mongoose.model('items',ItemSchema)
//  module.exports = Items

const  mongoose = require ('mongoose');

 const ItemSchema= new mongoose.Schema({
item:{
type:String,
required:true
},
price:{
type:Number,
Required:true
},
quantity:{
type:Number,
required:true
},
description:{
type:String,
required:true
}

},
{
   Timestamps:{
   required:true
   },
}
)
const Items = mongoose.model('items',ItemSchema)
module.exports = Items
