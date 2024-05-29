
import mongoose from "mongoose";
import app from "./app";
import config from "../src/app/config";

async function main (){
  try {
    await mongoose.connect(config.db as string)
    app.listen(config.port,()=>{
        console.log("App running on ",config.port)
    })
  } catch (error) {
        console.log(error)    
  }
}

main()