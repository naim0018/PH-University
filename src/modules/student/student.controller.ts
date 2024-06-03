import { NextFunction, Request, RequestHandler, Response } from "express";
import { StudentService } from "./student.service";
import { StatusCodes } from "http-status-codes";
import { sendResponse } from "../../app/utils/sendResponse";
import { catchAsync } from "../../app/utils/catchAsync";



const getAllStudent = catchAsync(async (req, res) => {
  const result = await StudentService.getAllStudentData();

  sendResponse(res, {
    status: StatusCodes.OK,
    success: true,
    message: "All student retrieve successful",
    data: result,
  });
});

const getStudentById = catchAsync(
  async (req, res ) => {
  
    const result = await StudentService.getStudentDataById(req.params.studentId);

    sendResponse(res, {
      status: StatusCodes.OK,
      success: true,
      message: "Find by id successful",
      data: result,
    });
  }
);
const deleteStudentById = catchAsync(async(req,res)=>{
  const result = await StudentService.deleteStudentDataById(req.params.studentId)
  sendResponse(res,{
    status:StatusCodes.OK,
    success:true,
    message:"Student Delete Successfully",
    data:result
  }
  )
})
const updateStudentById = catchAsync(async(req,res)=>{
  const result = await StudentService.updateStudentDataById(req.params.studentId,req.body.student)
sendResponse(res,{
  status:StatusCodes.OK,
  success:true,
  message:"Student update successful",
  data:result
})
})

export const StudentController = {
  getAllStudent,
  getStudentById,
  deleteStudentById,
  updateStudentById,
};
 