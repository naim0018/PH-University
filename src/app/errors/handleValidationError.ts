import mongoose, { Mongoose } from "mongoose";
import { TErrorSource, TGenericErrorResponse } from "../interface/error.interface";



const handleValidationError = (error:mongoose.Error.ValidationError) : TGenericErrorResponse =>{ 

    const errorSources :TErrorSource = Object.values(error.errors).map((value : mongoose.Error.ValidatorError | mongoose.Error.CastError)=>{
        return{
            path:value.path,
            message:value.message
        }
    })

   

    return{
        statusCode:400,
        message:"Mongoose Validation Error",
        errorSources
    }
}

export default handleValidationError