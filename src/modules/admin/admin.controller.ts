import { StatusCodes } from "http-status-codes"
import { catchAsync } from "../../app/utils/catchAsync"
import { sendResponse } from "../../app/utils/sendResponse"
import { AdminService } from "./admin.service"


const getAllAdmin=catchAsync(async (req,res)=>{
    const result= await AdminService.getAllAdminData()
    sendResponse(res,{
        status:StatusCodes.OK,
        success:true,
        message:"All faculty fetched",
        data:result,

    })
})  
const getAdminById=catchAsync(async (req,res)=>{
    const result= await AdminService.getAdminDataById(req.params.adminId)
    sendResponse(res,{
        status:StatusCodes.OK,
        success:true,
        message:"Faculty fetched",
        data:result,

    })
})
const updateAdminById=catchAsync(async (req,res)=>{
    const result= await AdminService.updateAdminDataById(req.params.adminId,req.body)
    sendResponse(res,{
        status:StatusCodes.OK,
        success:true,
        message:"Faculty data updated",
        data:result,

    })
})  
const deleteAdminById=catchAsync(async (req,res)=>{
    const result= await AdminService.deleteAdminDataById(req.params.adminId)
    sendResponse(res,{
        status:StatusCodes.OK,
        success:true,
        message:"Faculty data deleted",
        data:result,

    })
})  


export const AdminController={
    getAllAdmin,
    getAdminById,
    updateAdminById,
    deleteAdminById

}