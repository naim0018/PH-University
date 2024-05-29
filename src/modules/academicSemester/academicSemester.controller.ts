import { StatusCodes } from "http-status-codes"
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

export const AcademicSemesterControllers ={
    createAcademicSemester
}