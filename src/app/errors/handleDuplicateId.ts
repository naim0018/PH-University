import mongoose from "mongoose";
import { TErrorSource, TGenericErrorResponse } from "../interface/error.interface";

export const handleDuplicateId =(error:any):TGenericErrorResponse=>{

    const match = error.message.match(/"([^"]*)"/)
    const extractedValue = match && match[1]
    console.log(extractedValue)
    const errorSources :TErrorSource= [
        { 
            path: "",
            message:` ${extractedValue} is already exist`,
        }
    ]

    return{
        statusCode:11000,
        message:extractedValue,
        errorSources
    }

}  