// const dotenv =require('dotenv')
// const mongoose = require("mongoose")
// const express = require("express")
// const cors = require("cors") 
// const bodyParser = require("body-parser")
// const recieveData = require("./mongoconnect")
import { recieveData } from './mongoconnect';

// const port = 3001
// const app = express()

// dotenv.config();

// app.use(cors())
// app.use(bodyParser.json())

export default async function handler(req, res) {

   if (req.method == "GET") {
      res.status(200).send("connected")
   }
   //    app.get('/',(req,res)=>{
   //    res.send("connected")
   // })
   // app.post('/', (req, res) => {
   //   res.send('POST')
   //   console.log("POST FETCHED")
   //   console.log(req.body)
   //   recieveData(req.body)
   // })
   if (req.method == "POST") {
      try{

         console.log(req.body)
         console.log("POST FETCHED")
         await recieveData(req.body)
         res.status(200).send("POST FETCHED")
      }
      catch(error){
          console.log(error)
          res.status(500).json({ error: 'Something went wrong' });
      }
   }

   // app.listen(port, () => {
   //    console.log("server listening on port", `http://localhost:${port}`)
   // })

}
//    await Mongoconnect();

//   queryData.insertMany({})


