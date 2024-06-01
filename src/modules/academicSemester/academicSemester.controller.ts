import { StatusCodes, getStatusCode } from "http-status-codes"
import { catchAsync } from "../../app/utils/catchAsync"
import { sendResponse } from "../../app/utils/sendResponse"
import { AcademicSemesterServices } from "./academicSemester.service"


const createAcademicSemester=catchAsync(async(req,res)=>{
    const result= await AcademicSemesterServices.createAcademicSemesterData(req.body)
    sendResponse(res,{
        status:StatusCodes.OK,
        success:true,
        message:"Academic Semester Created Successfully",
        data:result
    })
})

const getAllAcademicSemester = catchAsync(async(req,res)=>{
    const result = await AcademicSemesterServices.getAllAcademicSemesterData()

    sendResponse(res,{
        status:StatusCodes.OK,
        success:true,
        message:"All academic semester fetched",
        data:result
    })
})
const getAcademicSemesterById = catchAsync(async(req,res)=>{
    
    const result = await AcademicSemesterServices.getAcademicSemesterDataById(req.params.id)

    sendResponse(res,{
        status:StatusCodes.OK,
        success:true,
        message:"Academic semester fetched By Id",
        data:result
    })
})
const updateAcademicSemesterById = catchAsync(async(req,res)=>{
    
    const result = await AcademicSemesterServices.updateAcademicSemesterDataById(req.params.id,req.body)

    sendResponse(res,{
        status:StatusCodes.OK,
        success:true,
        message:"Academic semester update By Id",
        data:result
    })
})

export const AcademicSemesterControllers ={
    createAcademicSemester,
    getAllAcademicSemester,
    getAcademicSemesterById,
    updateAcademicSemesterById,

}