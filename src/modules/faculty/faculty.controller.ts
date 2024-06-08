import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../app/utils/catchAsync";
import { sendResponse } from "../../app/utils/sendResponse";
import { FacultyService } from "./faculty.service";


const getAllFaculty=catchAsync(async (req,res)=>{
    const result= await FacultyService.getAllFacultyData()
    sendResponse(res,{
        status:StatusCodes.OK,
        success:true,
        message:"All faculty fetched",
        data:result,

    })
})  
const getFacultyById=catchAsync(async (req,res)=>{
    console.log(req.params)
    const result= await FacultyService.getFacultyDataById(req.params.facultyId)
    sendResponse(res,{
        status:StatusCodes.OK,
        success:true,
        message:"Faculty fetched",
        data:result,

    })
})
const updateFacultyById=catchAsync(async (req,res)=>{
    const result= await FacultyService.updateFacultyDataById(req.params.facultyId,req.body)
    sendResponse(res,{
        status:StatusCodes.OK,
        success:true,
        message:"Faculty data updated",
        data:result,

    })
})  
const deleteFacultyById=catchAsync(async (req,res)=>{
    const result= await FacultyService.deleteFacultyDataById(req.params.facultyId)
    sendResponse(res,{
        status:StatusCodes.OK,
        success:true,
        message:"Faculty data deleted",
        data:result,

    })
})  


export const FacultyController={
    getAllFaculty,
    getFacultyById,
    updateFacultyById,
    deleteFacultyById

}