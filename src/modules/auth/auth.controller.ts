import { StatusCodes } from "http-status-codes"
import { catchAsync } from "../../app/utils/catchAsync"
import { sendResponse } from "../../app/utils/sendResponse"
import { AuthService } from "./auth.service"


const logInUser =catchAsync(async(req,res)=>{
    const result = await AuthService.logInUserData(req.body)

    sendResponse(res,{
        status:StatusCodes.OK,
        success:true,
        message:"Authentication Success",
        data:result
    })
})

export const AuthController ={
    logInUser
}