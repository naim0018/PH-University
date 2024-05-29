import { NextFunction, Request, RequestHandler, Response } from "express";
import { UserServices } from "./user.service";
import { TStudent } from "../student/student.interface";
import { sendResponse } from "../../app/utils/sendResponse";
import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../app/utils/catchAsync";



const createStudent = catchAsync(async (req, res) => {
   
      const { password, data: studentData } = req.body;

      console.log(req.body);
      const result = await UserServices.createStudentData(
        password,
        studentData
      );

      sendResponse(res, {
        status: StatusCodes.OK,
        success: true,
        message: "Student created successfully",
        data: result,
      })
    
  }
);

export const UserControllers = {
  createStudent,
};
