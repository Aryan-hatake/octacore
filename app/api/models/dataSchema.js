
const mongoose = require("mongoose")

const querySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
         type:String,
         required:true,
         lowercase:true
    },
    number:{
        type:Number,
        required:true
    },
    query:{
        type:String,
        required:true
    }

})

const queryData = new mongoose.model('query',querySchema)
module.exports=queryData