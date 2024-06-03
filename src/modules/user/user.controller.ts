import { NextFunction, Request, RequestHandler, Response } from "express";
import { UserServices } from "./user.service";
import { TStudent } from "../student/student.interface";
import { sendResponse } from "../../app/utils/sendResponse";
import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../app/utils/catchAsync";



const createStudent = catchAsync(async (req, res) => {
   
      const { password, student } = req.body;

      
      console.log(student);
      const result = await UserServices.createStudentData(
        password,
        student
      );

      sendResponse(res, {
        status: StatusCodes.OK,
        success: true,
        message: "Student created successfully",
        data: result,
      })
    
  }
);
const getAllStudent=catchAsync(async(req,res)=>{
  const result = await UserServices.getAllStudentData()
  sendResponse(res,{
    status:StatusCodes.OK,
    success:true,
    message:"All user fetched successfully",
    data:result
  })
})

export const UserControllers = {
  createStudent,
  getAllStudent,
};
