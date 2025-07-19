// const dotenv =require('dotenv')
// const mongoose = require("mongoose")
// const express = require("express")
// const cors = require("cors") 
// const bodyParser = require("body-parser")
// const recieveData = require("./mongoconnect")

import mongoose from 'mongoose';
// const port = 3001
// const app = express()

// dotenv.config();

// app.use(cors())
// app.use(bodyParser.json())
async function Mongoconnect(){

   try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("database connected");
   } catch(err) {
      console.log("errorhai bhai", err);
      throw err; // Re-throw so calling function knows it failed
   }
   
}
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
   const QueryModel = mongoose.models.Query || mongoose.model('Query', querySchema);
async function recieveData(data){
   await Mongoconnect()
   const dataSchema = new QueryModel({
      name:data.name,
      email:data.email,
      number:data.number,
      query:data.query
   })
    await  dataSchema.save()
    console.log("data:",data)
  
  
}

export  async function GET() {

   return new Response("connected", { status: 200 });
   //    app.get('/',(req,res)=>{
   //    res.send("connected")
   // })
   // app.post('/', (req, res) => {
   //   res.send('POST')
   //   console.log("POST FETCHED")
   //   console.log(req.body)
   //   recieveData(req.body)
   // })
}
export async function POST(req){

  
      try{
         const body = await req.json()   
         console.log(body)
         console.log("POST FETCHED")
         await recieveData(body)
          return new Response("POST FETCHED", { status: 200 });
      }
      catch(error){
          console.log(error)
           return new Response("Something went wrong", { status: 500 });
      }
   }


   // app.listen(port, () => {
   //    console.log("server listening on port", `http://localhost:${port}`)
   // })


//    await Mongoconnect();

//   queryData.insertMany({})


