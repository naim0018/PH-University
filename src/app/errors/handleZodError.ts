import { ZodError, ZodIssue } from "zod"
import { TErrorSource, TGenericErrorResponse } from "../interface/error.interface"
import config from "../config"

export const handleZodError = (error:ZodError):TGenericErrorResponse=>{
    const errorSources :TErrorSource =error.issues.map((issue:ZodIssue)  =>{
        return{
            path:issue?.path[issue.path.length-1],
            message:issue.message
        }
    } )
    const statusCode =400
    return{
        statusCode,
        message:"Validation Error",
        errorSources,
        // stack: config.NODE_ENV === "development" ? error?.stack : null
    }
}