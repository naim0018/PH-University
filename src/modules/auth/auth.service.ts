import { StatusCodes } from "http-status-codes"
import { AppError } from "../../app/errors/AppError"
import { UserModel } from "../user/user.model"
import { TLogInUser } from "./auth.interface"
import bcrypt from 'bcrypt'



const logInUserData = async(payload:TLogInUser)=>{
    const isUserExist =await UserModel.isUserExistById(payload.id)
    console.log(isUserExist)

    if(!isUserExist){
        throw new AppError(StatusCodes.NOT_FOUND,"User not found")
    }
    if(isUserExist.isDeleted){
        throw new AppError(StatusCodes.NOT_FOUND,"User is deleted")
    }
    
    if(isUserExist.status === 'blocked'){
        throw new AppError(StatusCodes.NOT_FOUND,"User is blocked")
    }
    const matchPassword =await bcrypt.compare(payload?.password,isUserExist?.password)
    if(!matchPassword ){
        throw new AppError(StatusCodes.NOT_FOUND,"Password does not match")
    }
    

}


export const AuthService ={
    logInUserData
}