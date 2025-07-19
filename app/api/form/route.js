// const dotenv =require('dotenv')
// const mongoose = require("mongoose")
// const express = require("express")
// const cors = require("cors") 
// const bodyParser = require("body-parser")
// const recieveData = require("./mongoconnect")
import { recieveData } from "@/backend/mongoconnect";
// const port = 3001
// const app = express()

// dotenv.config();

// app.use(cors())
// app.use(bodyParser.json())

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


