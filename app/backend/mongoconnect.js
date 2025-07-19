// const mongoose = require("mongoose")
// const querySchema = require("./models/dataSchema")
// const dotenv =require('dotenv')
// dotenv.config();
import mongoose from 'mongoose';
import queryData from '@/models/dataSchema';


export default async function Mongoconnect(){

   try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("database connected");
   } catch(err) {
      console.log("errorhai bhai", err);
      throw err; // Re-throw so calling function knows it failed
   }

}
async function recieveData(data){
   await Mongoconnect()
   const dataSchema = new querySchema({
      name:data.name,
      email:data.email,
      number:data.number,
      query:data.query
   })
    await  dataSchema.save()
    console.log("data:",data)
  
  
}

export {recieveData}
