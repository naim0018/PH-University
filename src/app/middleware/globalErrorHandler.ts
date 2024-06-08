import { NextFunction, Request, Response } from "express";
import { ZodError, ZodIssue } from "zod";
import { TErrorSource } from "../interface/error.interface";
import config from "../config";
import handleValidationError from "../errors/handleValidationError";
import { handleZodError } from "../errors/handleZodError";
import { handleCastError } from "../errors/handleCastErrors";
import { handleDuplicateId } from "../errors/handleDuplicateId";
import { AppError } from "../errors/AppError";

export const globalErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode =  500;
  let message =  "Something went wrong!";


  let errorSources: TErrorSource = [
    {
      path: "",
      message: "", 
    },
  ];



if(error instanceof ZodError){
    const zodError = handleZodError(error)

    statusCode = zodError?.statusCode
    message = zodError?.message
    errorSources = zodError?.errorSources
    
  }else if(error?.name === "ValidationError"){
    const mongooseValidationError = handleValidationError(error)
    statusCode = mongooseValidationError.statusCode
    message = mongooseValidationError.message
    errorSources = mongooseValidationError.errorSources
  }else if(error.name === "CastError"){
    const castError = handleCastError(error)
    statusCode = castError.statusCode
    message = castError.message
    errorSources = castError.errorSources 
  }else if(error.code === 11000){
    const duplicateId = handleDuplicateId(error)
    statusCode = duplicateId.statusCode
    message = duplicateId.message
    errorSources = duplicateId.errorSources 
  }else if(error instanceof AppError){
    statusCode = error?.statusCode;
    message = error.message;
    errorSources=[{
      path:'',
      message:error?.message
    }]
  }else if(error instanceof Error){
    message = error?.message
   errorSources = [{
    path:'',
    message:error?.message
   }]

  }
  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    stack: config.NODE_ENV ==="development" ? error?.stack : null
  });
};
  